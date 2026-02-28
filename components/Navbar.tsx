'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">DIC</span>
                        </div>
                        <span className="font-bold text-xl text-gray-900">Dubai International Chemicals</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover: text-blue-600 transition">
                        About Us
                    </Link>
                    <Link href="/products" className="text-gray-700 hover: text-blue-600 transition">
                        Products
                    </Link>
                    <Link href="/suppliers" className="text-gray-700 hover: text-blue-600 transition">
                        Suppliers
                    </Link>
                    <Link href="/careers" className="text-gray-700 hover: text-blue-600 transition">
                        Careers
                    </Link>
                    <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        Contact Us
                    </Link>
                </div>
                
                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden bg-white border-t">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Home
                    </Link>
                    <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        About Us
                    </Link>
                    <Link href="/products" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Products
                    </Link>
                    <Link href="/suppliers" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Suppliers
                    </Link>
                    <Link href="/careers" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Careers
                    </Link>
                    <Link href="/contact" className="block px-3 py-2 bg-blue-600 text-white rounded">
                        Contact Us
                    </Link>
                </div>
            </div>
        )}
        </nav>
    )
}
