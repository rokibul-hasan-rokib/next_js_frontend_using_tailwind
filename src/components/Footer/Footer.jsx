import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="py-8 text-white bg-gray-700">
            <div className="px-4 mx-auto max-w-7xl">
                <div className="flex flex-col justify-between md:flex-row">
                    <div className="mb-4 md:mb-0">
                        <h5 className="text-lg font-bold">Company Name</h5>
                        <p className="text-sm">Your go-to solution for all your needs.</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h6 className="text-sm font-semibold">Quick Links</h6>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-gray-300">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-300">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-300">Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-300">Contact</a></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h6 className="text-sm font-semibold">Follow Us</h6>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-300">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-gray-300">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-gray-300">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="pt-4 mt-8 text-center border-t border-gray-700">
                    <p className="text-sm">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
