"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Page() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const postsPerPage = 5;

    useEffect(() => {
        // Fetch posts
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            setPosts(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching posts:", error);
            setLoading(false);
          });

        // Fetch users
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
            setUsers(response.data);
          })
          .catch((error) => {
            console.error("Error fetching users:", error);
          });
      }, []);

    // Calculate pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Map userId to user name
    const userMap = users.reduce((map, user) => {
        map[user.id] = user.name;
        return map;
    }, {});

    if (loading) return <p className="text-xl text-center">Loading...</p>;

    return (
      <div>
        <div className="container p-6 mx-auto">
          <h1 className="mb-6 text-3xl font-bold text-center">User Posts</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-lg">
              <thead>
                <tr className="text-sm leading-normal text-white uppercase bg-blue-500">
                  <th className="px-6 py-3 text-left">ID</th>
                  <th className="px-6 py-3 text-left">User Name</th>
                  <th className="px-6 py-3 text-left">Title</th>
                  <th className="px-6 py-3 text-left">Body</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-700">
                {currentPosts.map((post) => (
                  <tr key={post.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-6 py-3 text-left">{post.id}</td>
                    <td className="px-6 py-3 text-left">{userMap[post.userId] || 'Unknown'}</td>
                    <td className="px-6 py-3 text-left">{post.title}</td>
                    <td className="px-6 py-3 text-left">{post.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
}
