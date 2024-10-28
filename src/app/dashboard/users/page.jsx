"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const usersPerPage = 5;
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p className="text-xl text-center">Loading...</p>;

  return (
    <div className="container p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">User List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg">
          <thead>
            <tr className="text-sm leading-normal text-white uppercase bg-blue-500">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Username</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Address</th>
              <th className="px-6 py-3 text-left">Phone</th>
              <th className="px-6 py-3 text-left">Website</th>
              <th className="px-6 py-3 text-left">Company</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light text-gray-700">
            {currentUsers.map((user) => (  
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-3 text-left">{user.id}</td>
                <td className="px-6 py-3 text-left">{user.name}</td>
                <td className="px-6 py-3 text-left">{user.username}</td>
                <td className="px-6 py-3 text-left">{user.email}</td>
                <td className="px-6 py-3 text-left">
                  {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                </td>
                <td className="px-6 py-3 text-left">{user.phone}</td>
                <td className="px-6 py-3 text-left">{user.website}</td>
                <td className="px-6 py-3 text-left">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
