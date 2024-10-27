// components/Topbar/Topbar.jsx

"use client"; // This component will be rendered on the client-side

import { useRouter } from 'next/navigation'; // Use this import for Next.js 13 and later

export default function Topbar() {
    const router = useRouter(); // Use the router

    return (
        <header className="text-white bg-gray-800 shadow">
            <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
                <h1 className="text-xl font-semibold">Dashboard</h1>
                <button
                    onClick={() => router.push('/')} // Redirect to homepage
                    className="text-blue-500 hover:text-blue-700"
                >
                    Logout
                </button>
            </div>
        </header>
    );
}
