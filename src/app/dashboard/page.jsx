import Role from '@/components/Backend/Role/Role'
import React from 'react'

const page = () => {
  return (
    <div>
       <div className="flex flex-col h-screen">
            
            <div className="flex flex-1">
                
                <main className="flex-1 p-6 bg-gray-100">
                    <h2 className="text-2xl font-bold">Welcome to Your Dashboard!</h2>
                    <p className="mt-4">This is your main content area.</p>
                    {/* Add more dashboard content here */}
                    <Role/>
                </main>
            </div>
        </div>
    </div>
  )
}

export default page
