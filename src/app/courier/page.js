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
        division_ids: [],
        city_ids: [],
        zone_ids: [],
    });

    const [divisions, setDivisions] = useState([]);
    const [cities, setCities] = useState([]);
    const [zones, setZones] = useState([]);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const fetchDivisions = async () => {
            const response = await fetch('/api/divisions'); // Adjust this endpoint as necessary
            const data = await response.json();
            setDivisions(data);
        };

        const fetchCities = async () => {
            const response = await fetch('/api/cities'); // Adjust this endpoint as necessary
            const data = await response.json();
            setCities(data);
        };

        const fetchZones = async () => {
            const response = await fetch('/api/zones'); // Adjust this endpoint as necessary
            const data = await response.json();
            setZones(data);
        };

        fetchDivisions();
        fetchCities();
        fetchZones();

        const query = new URLSearchParams(window.location.search);
        const id = query.get('id');

        if (id) {
            setEditMode(true);
            const fetchCourier = async () => {
                const response = await fetch(`/api/couriers?id=${id}`);
                const data = await response.json();
                setCourier({
                    ...data,
                    division_ids: data.division_ids || [],
                    city_ids: data.city_ids || [],
                    zone_ids: data.zone_ids || [],
                });
            };

            fetchCourier();
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (checked) {
            setCourier((prev) => ({
                ...prev,
                [name]: [...prev[name], value],
            }));
        } else {
            setCourier((prev) => ({
                ...prev,
                [name]: prev[name].filter((id) => id !== value),
            }));
        }
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
                <fieldset className="mb-4">
                    <legend className="mb-1 font-bold">Select Divisions</legend>
                    {divisions.map((division) => (
                        <div key={division._id} className="form-check">
                            <input
                                type="checkbox"
                                id={`division-${division._id}`}
                                name="division_ids"
                                value={division._id}
                                checked={courier.division_ids.includes(division._id)}
                                onChange={handleChange}
                                className="form-check-input"
                            />
                            <label htmlFor={`division-${division._id}`} className="form-check-label">
                                {division.name}
                            </label>
                        </div>
                    ))}
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="mb-1 font-bold">Select Cities</legend>
                    {cities.map((city) => (
                        <div key={city._id} className="form-check">
                            <input
                                type="checkbox"
                                id={`city-${city._id}`}
                                name="city_ids"
                                value={city._id}
                                checked={courier.city_ids.includes(city._id)}
                                onChange={handleChange}
                                className="form-check-input"
                            />
                            <label htmlFor={`city-${city._id}`} className="form-check-label">
                                {city.name}
                            </label>
                        </div>
                    ))}
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="mb-1 font-bold">Select Zones</legend>
                    {zones.map((zone) => (
                        <div key={zone._id} className="form-check">
                            <input
                                type="checkbox"
                                id={`zone-${zone._id}`}
                                name="zone_ids"
                                value={zone._id}
                                checked={courier.zone_ids.includes(zone._id)}
                                onChange={handleChange}
                                className="form-check-input"
                            />
                            <label htmlFor={`zone-${zone._id}`} className="form-check-label">
                                {zone.name}
                            </label>
                        </div>
                    ))}
                </fieldset>
                <button type="submit" className="px-4 py-2 text-white bg-blue-500">
                    {editMode ? 'Update Courier' : 'Add Courier'}
                </button>
            </form>
        </div>
    );
}
