"use client";
 
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function page() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body });
            alert('Post created successfully!');
            router.push('/posts'); // Redirect to posts list
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Failed to create post. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container p-6 mx-auto">
            <h1 className="mb-4 text-3xl font-bold">Create New Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Body</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500"
                    disabled={loading}
                >
                    {loading ? "Saving..." : "Create Post"}
                </button>
            </form>
        </div>
    );
}
