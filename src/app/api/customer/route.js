import { uploadMiddleware, runMiddleware } from '../../../middlewares/multer';
import dbConnect from '../../../lib/dbConnect';
import Customer from '../../../models/Customer';
import { NextResponse } from 'next/server';

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

export const config = {
  api: {
    bodyParser: false,
  },
};
