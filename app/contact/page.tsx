'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
    })

    const handleSubmit = (e: React. FormEvent) => {
        e.preventDefault()
        alert('Message sent! We will get back to you soon.')
    }
    
    return (
        <main>
            <section className="relative h-[300px] bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl">Get in touch with our team</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }} 
                            whileInView={{ opacity: 1, x:0 }} 
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                        <p className="text-gray-600">
                                            Dubai International Chemicals FZCO
                                            <br />
                                            P.O. Box 261911
                                            <br />
                                            Jebel Ali, Dubai
                                            <br />
                                            United Arab Emirates
                                        </p>
                                    </div>
                                </div>
            
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-green-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600">+971 4 883 1314</p>
                                        <p className="text-gray-600">Fax: +971 4 883 1315</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-purple-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className= "font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">info@dubaichemicals.com</p>
                                        <p className="text-gray-600">sales@dubaichemicals.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="text-orange-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                                        <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600">Friday - Saturday: Closed</p>
                                    </div>
                                </div>
                            </div>
            
                            {/* Map */}
                            <div className="mt-8 rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.2!2d55.0!3d25.0
                                    !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAwJzAwLjAiTiA1NcKwMDAnMDAuMCJF
                                    !5e0!3m2!1sen!2sae!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0}}
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    
                        {/* Contact Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20}}
                            whileInView={{ opacity: 1, x:0}} 
                            viewport={{ once: true }}
                        >
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                    
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            value={formData.phone}
                                            onChange={e => setFormData({...formData, phone: e.target.value })}
                                        />
                                    </div>
                    
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Company</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            value={formData.company}
                                            onChange={e => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            value={formData.subject}
                                            onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                                        <textarea
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    )
}

