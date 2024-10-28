// app/api/couriers/route.js

import  { connectDB } from '../../../lib/db'; // Adjust the path as necessary
import Courier from '../../../../models/Courier';
import CourierDivision from '../../../../models/CourierDivision';
import CourierCity from '../../../../models/CourierCity';
import CourierZone from '../../../../models/CourierZone';

// Connect to the database
const connect = async () => {
  await connectDB();
};

// Handle GET requests
export async function GET() {
  await connect();
  try {
    const couriers = await Courier.find();
    return new Response(JSON.stringify(couriers), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error fetching couriers' }), { status: 500 });
  }
}

// Handle POST requests
export async function POST(request) {
  await connect();
  try {
    const { name, sort_order, inside_dhaka_charge, outside_dhaka_charge, divisions, cities, zones } = await request.json();

    // Create the new courier
    const courier = new Courier({ name, sort_order, inside_dhaka_charge, outside_dhaka_charge });
    await courier.save();

    // Save associated divisions, cities, and zones
    if (divisions) {
      await Promise.all(divisions.map(async (divisionId) => {
        await new CourierDivision({ courier_id: courier._id, division_id: divisionId }).save();
      }));
    }

    if (cities) {
      await Promise.all(cities.map(async (cityId) => {
        await new CourierCity({ courier_id: courier._id, city_id: cityId }).save();
      }));
    }

    if (zones) {
      await Promise.all(zones.map(async (zoneId) => {
        await new CourierZone({ courier_id: courier._id, zone_id: zoneId }).save();
      }));
    }

    return new Response(JSON.stringify(courier), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error creating courier' }), { status: 400 });
  }
}

// Handle PUT requests
export async function PUT(request) {
  await connect();
  const { id } = request.headers; // Make sure to pass the courier ID in headers

  try {
    const { name, sort_order, inside_dhaka_charge, outside_dhaka_charge, divisions, cities, zones } = await request.json();

    // Find and update the courier
    const updatedCourier = await Courier.findByIdAndUpdate(
      id,
      { name, sort_order, inside_dhaka_charge, outside_dhaka_charge },
      { new: true }
    );

    // Update associated divisions, cities, and zones
    if (divisions) {
      await CourierDivision.deleteMany({ courier_id: id });
      await Promise.all(divisions.map(async (divisionId) => {
        await new CourierDivision({ courier_id: updatedCourier._id, division_id: divisionId }).save();
      }));
    }

    if (cities) {
      await CourierCity.deleteMany({ courier_id: id });
      await Promise.all(cities.map(async (cityId) => {
        await new CourierCity({ courier_id: updatedCourier._id, city_id: cityId }).save();
      }));
    }

    if (zones) {
      await CourierZone.deleteMany({ courier_id: id });
      await Promise.all(zones.map(async (zoneId) => {
        await new CourierZone({ courier_id: updatedCourier._id, zone_id: zoneId }).save();
      }));
    }

    return new Response(JSON.stringify(updatedCourier), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error updating courier' }), { status: 400 });
  }
}

// Handle DELETE requests
export async function DELETE(request) {
    await connect();
    const { id } = request.headers; // Make sure to pass the courier ID in headers
  
    try {
      // Delete associated divisions, cities, and zones
      await CourierDivision.deleteMany({ courier_id: id });
      await CourierCity.deleteMany({ courier_id: id });
      await CourierZone.deleteMany({ courier_id: id });
  
      // Delete the courier
      const deletedCourier = await Courier.findByIdAndDelete(id);
  
      if (!deletedCourier) {
        return new Response(JSON.stringify({ error: 'Courier not found' }), { status: 404 });
      }
  
      return new Response(JSON.stringify({ message: 'Courier deleted successfully' }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Error deleting courier' }), { status: 400 });
    }
  }
