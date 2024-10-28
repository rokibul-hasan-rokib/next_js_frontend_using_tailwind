"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostDetail() {
    const router = useRouter();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!router.isReady) return; // Wait until the router is ready
        if (!router.query.id) return;
    
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${router.query.id}`);
                setPost(response.data);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchPost();
    }, [router.isReady, router.query]); // Run effect when the router is ready or the query changes

    if (loading) return <p>Loading...</p>;
    if (!post) return <p>Post not found!</p>;

    return (
        <div className="container p-6 mx-auto">
            <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
            <p>{post.body}</p>
            <button 
              onClick={() => router.push(`/posts/${post.id}/edit`)} 
              className="px-4 py-2 mt-4 text-white bg-blue-500"
            >
              Edit Post
            </button>
        </div>
    );
}
