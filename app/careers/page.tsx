'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, Upload} from 'lucide-react'

const openings = [
    {
        title: 'Sales Manager',
        department: 'Sales',
        location: 'Dubai, UAE',
        type: 'Full-time',
        description: 'Lead our sales team and drive business growth across the GCC region.',
    },
    {
        title: 'Warehouse Supervisor',
        department: 'Operations',
        location: 'Jebel Ali, Dubai',
        type: 'Full-time',
        description: 'Oversee warehouse operations and ensure efficient inventory management.',
    },
    {
        title: 'Chemical Engineer',
        department: 'Technical',
        Location: 'Dubai, UAE',
        type: 'Full-time',
        description: 'Provide technical support and product development expertise.',
    }
]

export default function CareersPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Application submitted! We will contact you soon.')
    }

    return (
        <main>
            <section className="relative h-[300px] bg-gradient-to-r from-green-600 to-green-800">
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <h1 className="text-5xl font-bold mb-4">Careers</h1>
                        <p className="text-xl">Join our team of passionate professionals</p>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Dubai International Chemicals is one of the leading chemical suppliers in the region. Our career opportunities span a diverse range of disciplines. Passionate, talented, and intelligent people have made us the firm we are today.
                        </p>
                    </div>
            
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            className="text-center p-6"
                            initial={{ opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Briefcase className="text-green-600" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Opportunities</h3>
                            <p className="text-gray-600">Advance your career with training and development programs</p>
                        </motion.div>

                        <motion.div
                            className="text-center p-6"
                            initial={{ opacity: 0, y: 20}}
                            whileInView={{ opacity: 1, y: 0}}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1}}
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Briefcase className="text-blue-600" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Benefits</h3>
                            <p className="text-gray-600">Comprehensive compensation and benefits package</p>
                        </motion.div>
            
                        <motion.div
                            className="text-center p-6"
                            initial={{ opacity: 0, y: 20}}
                            whileInView={{ opacity: 1, y: 0}}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2}}
                        >
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Briefcase className="text-purple-600" size={32} />
                            </div>
            
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Diverse Team</h3>
                            <p className="text-gray-600">Work with talented professionals from around the world</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Current Openings</h2>

                    <div className="space-y-6 mb-16">
                        {openings.map((job, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded">{job.department}</span>
                                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded">{job.location}</span>
                                            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded">{job.type}</span>
                                        </div>
            
                                        <p className="text-gray-600 mt-3">{job.description}</p>
                                    </div>
                                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition whitespace-nowrap">
                                        Apply Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Application Form</h2>
            
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
            
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={formData.email}
                                onChange={e => setFormData({ ... formData, email: e.target.value})}
                            />
                        </div>
            
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={formData.phone}
                                onChange={e => setFormData({ ... formData, phone: e.target.value})}
                            />
                        </div>
            
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Position Applying For *</label>
                            <select    
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={formData.position}
                                onChange={e => setFormData({ ...formData, position: e.target.value })}
                            >
                                <option value="">Select a position</option>
                                {openings.map((job, idx) => (
                                    <option key={idx} value={job.title}>
                                    {job.title}
                                    </option>
                                ))}
                            </select>
                        </div>
            
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Cover Letter</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                            />
                        </div>
            
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Upload CV *</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition cursor-pointer">
                                <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                                <p className="text-gray-600">Click to upload or drag and drop</p>
                                <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}