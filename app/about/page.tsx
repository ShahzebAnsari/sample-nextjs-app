'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Warehouse, Heart, Newspaper } from 'lucide-react'

const sections = [
    {
        icon: Building2,
        title: 'Company Profile',
        description: 'Learn about our history, mission, and growth since 1979',
        href: '/about/profile',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        icon: Warehouse,
        title: 'Infrastructure',
        description: 'Explore our world-class storage and logistics facilities',
        href: '/about/infrastructure',
        color: 'bg-green-100 text-green-600',
    },
    {
        icon: Heart,
        title: 'Our Values',
        description: 'Discover the principles that guide our business',
        href: '/about/values',
        color: 'bg-purple-100 text-purple-600',
    },
    {
        icon: Newspaper,
        title: 'News & Events',
        description: 'Stay updated with our latest achievements and announcements',
        href: '/about/news',
        color: 'bg-orange-100 text-orange-600',
    }
]

export default function AboutPage() {
     return (
        <main>
            {/* Hero Section */}
            <section className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold mb-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1}}
                        >
                            About Us
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl max-w-3x1"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Leading chemical distributor serving the Middle East and Africa since 1979
                        </motion.p>
                    </div>
                </div>
            </section>
            {/* Quick Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -20}} whileInView={{opacity: 1, x:0}} viewport={{ once: true }}>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Excellence in Chemical Distribution</h2>
                            <p className="text-lg text-gray-600 mb-4">
                                Established in 1979, Dubai International Chemicals has grown from a small trading house to a diversified group of companies involved in trading, manufacturing, warehousing, and logistics activities.
                            </p>
                            <p className="text-lg text-gray-600 mb-4">
                                Today, we are one of the UAE's leading, well-diversified, multi-product industrial chemical distributors, serving a wide range of industries across the GCC and East African countries.
                            </p>
                            <p className="text-lg text-gray-600">
                                With over 200 dedicated employees and 70,000 sq m of storage facilities, we ensure uninterrupted supply of quality products to our valued customers.
                            </p>
                        </motion.div>
                        <motion.div
                            className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, x: 20}}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                                alt="Chemical facility"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* Section Cards */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore More</h2>
                        <p className="text-xl text-gray-600">Learn more about our company</p>
                    </div>
            
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20}}
                                whileInView={{ opacity: 1, y: 0}}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1}}
                            >
                                <Link href={section.href}>
                                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
                                        <div className={`w-16 h-16 ${section.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <section.icon size={32} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                                            {section.title}
                                        </h3>
                                        <p className="text-gray-600">{section.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}