import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 1g:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">DIC</span>
                            </div>
                            <span className="font-bold text-white">Dubai International Chemicals</span>
                        </div>
                        <p className="text-sm">
                            Leading chemical distributor serving the Middle East and Africa with quality products since 1979.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/about" className="hover: text-white transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover: text-white transition">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/suppliers" className="hover: text-white transition">
                                Suppliers
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers" className="hover: text-white transition">
                                Careers
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Industries */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Industries</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Drilling Mud Chemicals</li>
                        <li>Detergents & Personal Care</li>
                        <li>Perfumes & Cosmetics</li>
                        <li>Packaging & Printing</li>
                        <li>Paint & Polymer</li>
                    </ul>
                </div>
                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start">
                            <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                            <span>P.O. Box 261911, Jebel Ali, Dubai, UAE</span>
                        </li>
                        <li className="flex items-center">
                            <Phone size={16} className="mr-2" />
                            <span>+971 4 883 1314</span>
                        </li>
                        <li className="flex items-center">
                            <Mail size={16} className="mr-2" />
                            <span>info@dubaichemicals.com</span>
                        </li>
                    </ul>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover: text-white transition">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="hover: text-white transition">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="hover: text-white transition">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
                <p>&copy; {new Date().getFullYear()} Dubai International Chemicals. All rights reserved.</p>
                <div className="mt-2">
                    <Link href="/privacy" className="hover: text-white transition">
                        Privacy Policy
                    </Link>
                </div>
            </div>
            </div>
        </footer>
    )
}