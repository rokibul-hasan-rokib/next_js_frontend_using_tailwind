import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <nav className="w-64 h-full max-h-full py-4 text-white bg-gray-800 ">
            <ul className="space-y-2">
                <li>
                    <Link href="/dashboard">
                        <span className="block px-4 py-2 hover:bg-blue-950">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/post">
                        <span className="block px-4 py-2 hover:bg-blue-950">Post</span>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/setting">
                        <span className="block px-4 py-2 hover:bg-blue-950">Settings</span>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/users">
                        <span className="block px-4 py-2 hover:bg-blue-950">Users</span>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/reports">
                        <span className="block px-4 py-2 hover:bg-blue-950">Reports</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar
