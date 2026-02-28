'use client'

import { motion } from 'framer-motion'
import { Warehouse, Truck, MapPin, Package} from 'lucide-react'

const facilities = [
    {
        icon: Warehouse,
        title: 'Storage Capacity',
        value: '70,000 sq m',
        description: 'Total storage facility including bulk storage for solvents and liquid chemicals',
    },
    {
        icon: Package,
        title: 'JAFZA Terminal',
        value: '15,000 CBM',
        description: 'State-of-the-art terminal in Jebel Ali Free Zone',
    },
    {
        icon: MapPin,
        title: 'Strategic Locations',
        value: '14 Facilities',
        description: 'Al Quoz Industrial Area, Jebel Ali Industrial Area, and JAFZA',
    },
    {
        icon: Truck,
        title: 'Fleet',
        value: '40 ft Trailers',
        description: 'Own fleet of trailers and tankers for timely delivery',
    },
]

const capabilities = [
    'Bulk storage for solvents and liquid chemicals',
    'Drum and iso-tank filling facilities',
    'Onsite blending as per customer requirements',
    'Temperature-controlled storage',
    'Advanced inventory management systems',
    'Quality control laboratories',
]

export default function InfrastructurePage() {
    return (
        <main>
            <section className="relative h-[300px] bg-gradient-to-r from-green-600 to-green-800">
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <h1 className="text-5xl font-bold mb-4">Infrastructure</h1>
                        <p className="text-xl">World-class facilities for reliable chemical distribution</p>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {facilities.map((facility, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20}}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1}}
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <facility.icon size={40} className="text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{facility.value}</h3>
                                <p className="text-lg font-semibold text-green-600 mb-2">{facility.title}</p>
                                <p className="text-gray-600 text-sm">{facility.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -20}} whileInView={{ opacity: 1, x:0}} viewport={{ once: true }}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Facilities</h2>
                            <p className="text-gray-600 mb-6">
                                Our group of companies have developed a considerably large storage facility of 70,000 sq m including bulk storage for solvents and other liquid chemicals. These storage facilities are situated in four strategic locations across Dubai.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Our state-of-the-art terminal in Jebel Ali Free Zone (JAFZA) can store up to 15,000 CBM. Our huge warehousing facility enables us to stock enough inventory and ensure uninterrupted supply of products to our customers.
                            </p>
                            <p className="text-gray-600">
                                With our new state-of-the-art terminal, we are better placed than ever before to participate fully in the growth and future of the chemical industry.
                            </p>
                        </motion.div>
                        <motion.div
                            className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, x: 20}}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                                alt="Warehouse facility"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start space-x-3 p-6 bg-gray-50 rounded-lg"
                                initial={{ opacity: 0, y: 20}}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                                <p className="text-gray-700">{capability}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Logistics Excellence</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        We have our own fleet of 40 ft trailers and tankers which help us ensure timely delivery of our products to our customers. We also do onsite blending as per the requirements of our customers and have the latest drum and iso-tank filling facilities.
                    </p>
                </div>
            </section>
        </main>
    )
}
