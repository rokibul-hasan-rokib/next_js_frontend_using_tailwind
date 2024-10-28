"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function page() {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState({ title: '', body: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((response) => {
                    setPost(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching post:", error);
                    setLoading(false);
                });
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, post)
            .then((response) => {
                alert('Post updated successfully!');
                router.push(`/posts/${id}`);
            })
            .catch((error) => {
                console.error("Error updating post:", error);
            });
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="container p-6 mx-auto">
            <h1 className="mb-4 text-3xl font-bold">Edit Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Body</label>
                    <textarea
                        name="body"
                        value={post.body}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300"
                    ></textarea>
                </div>
                <button type="submit" className="px-4 py-2 text-white bg-blue-500">Save Changes</button>
            </form>
        </div>
    );
}
