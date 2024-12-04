'use client'
import React, { useState } from "react";

export default function page() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count} </p>
      <button className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-700" onClick={() => setCount(count + 1)}>Increament</button>
      <button className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-700" onClick={() => setCount(count - 1)}>Decreament</button>
    </div>
  );
}
