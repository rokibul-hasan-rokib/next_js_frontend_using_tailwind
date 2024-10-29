import { uploadMiddleware, runMiddleware } from '../../../middlewares/multer';
import dbConnect from '../../../lib/dbConnect';
import Customer from '../../../models/Customer';
import { NextResponse } from 'next/server';

// GET: Retrieve all customers
export async function GET() {
    await dbConnect();
    
    try {
      const customers = await Customer.find();
      return NextResponse.json(customers, { status: 200 });
    } catch (error) {
      console.error('Error fetching customers:', error);
      return NextResponse.json({ error: 'Error fetching customers' }, { status: 500 });
    }
  }

export async function POST(req) {
  await dbConnect();

  const res = {};
  await runMiddleware(req, res, uploadMiddleware);

  const { name } = req.body;

  if (!req.file) {
    return NextResponse.json({ error: 'Image is required' }, { status: 400 });
  }

  const imagePath = `/images/${req.file.filename}`;

  try {
    const customer = await Customer.create({ name, image: imagePath });
    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    console.error('Error creating customer:', error);
    return NextResponse.json({ error: 'Error creating customer' }, { status: 500 });
  }
}

// PUT: Update a customer by ID
export async function PUT(req) {
    await dbConnect();
  
    const { id } = req.query; // Assuming you're passing ID in the query
    const { name } = await req.json(); // Assuming you're sending the updated name as JSON
    let imagePath = null;
  
    // Check if a new image is being uploaded
    if (req.headers['content-type'].includes('multipart/form-data')) {
      const res = {};
      await runMiddleware(req, res, uploadMiddleware);
      
      if (req.file) {
        imagePath = `/uploads/${req.file.filename}`;
      }
    }
  
    try {
      const customer = await Customer.findByIdAndUpdate(
        id,
        { name, ...(imagePath ? { image: imagePath } : {}) },
        { new: true } // Return the updated document
      );
  
      if (!customer) {
        return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
      }
  
      return NextResponse.json(customer, { status: 200 });
    } catch (error) {
      console.error('Error updating customer:', error);
      return NextResponse.json({ error: 'Error updating customer' }, { status: 500 });
    }
  }

  // DELETE: Remove a customer by ID
export async function DELETE(req) {
    await dbConnect();
  
    const { id } = req.query; // Assuming you're passing ID in the query
  
    try {
      const customer = await Customer.findByIdAndDelete(id);
  
      if (!customer) {
        return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
      }
  
      return NextResponse.json({ message: 'Customer deleted successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error deleting customer:', error);
      return NextResponse.json({ error: 'Error deleting customer' }, { status: 500 });
    }
  }
  

export const config = {
  api: {
    bodyParser: false,
  },
};
