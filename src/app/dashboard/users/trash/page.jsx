// app/trash/page.js

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function page() {
  const [trashedUsers, setTrashedUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrashedUsers = async () => {
      try {
        const response = await axios.get('/api/users/trash'); 
        setTrashedUsers(response.data);
      } catch (error) {
        console.error("Error fetching trashed users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrashedUsers();
  }, []);

  if (loading) return <p>Loading trashed users...</p>;

  return (
    <div className="container p-6 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Trashed Users</h1>
      <table className="min-w-full bg-white border border-gray-200 shadow-lg">
        <thead>
          <tr className="text-sm leading-normal text-white uppercase bg-red-500">
            <th className="px-6 py-3 text-left">ID</th>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Deleted At</th>
          </tr>
        </thead>
        <tbody className="text-sm font-light text-gray-700">
          {trashedUsers.map((user) => (
            <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="px-6 py-3 text-left">{user._id}</td>
              <td className="px-6 py-3 text-left">{user.name}</td>
              <td className="px-6 py-3 text-left">{user.email}</td>
              <td className="px-6 py-3 text-left">{new Date(user.deletedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
