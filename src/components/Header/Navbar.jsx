import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="bg-gray-500 shadow">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    
                    <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold text-gray-900">Brand</a>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200">Home</a>
                            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200">About</a>
                            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200">Services</a>
                            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-200">Home</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-200">About</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-200">Services</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-200">Contact</a>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
