// app/couriers/form.js
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CourierForm() {
    const router = useRouter();
    const [courier, setCourier] = useState({
        name: '',
        sort_order: '',
        inside_dhaka_charge: '',
        outside_dhaka_charge: '',
    });

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const id = query.get('id');

        if (id) {
            setEditMode(true);
            const fetchCourier = async () => {
                const response = await fetch(`/api/couriers?id=${id}`);
                const data = await response.json();
                setCourier(data);
            };

            fetchCourier();
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourier((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editMode ? 'PUT' : 'POST';
        const response = await fetch('/api/couriers', {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(courier)
        });

        if (response.ok) {
            router.push('/couriers');
        } else {
            const error = await response.json();
            console.error('Error:', error);
        }
    };

    return (
        <div className="container p-6 mx-auto">
            <h1 className="mb-4 text-3xl font-bold">{editMode ? 'Edit Courier' : 'Add Courier'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={courier.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Sort Order</label>
                    <input
                        type="number"
                        name="sort_order"
                        value={courier.sort_order}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Inside Dhaka Charge</label>
                    <input
                        type="number"
                        name="inside_dhaka_charge"
                        value={courier.inside_dhaka_charge}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Outside Dhaka Charge</label>
                    <input
                        type="number"
                        name="outside_dhaka_charge"
                        value={courier.outside_dhaka_charge}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button type="submit" className="px-4 py-2 text-white bg-blue-500">
                    {editMode ? 'Update Courier' : 'Add Courier'}
                </button>
            </form>
        </div>
    );
}
