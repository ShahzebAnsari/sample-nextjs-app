'use client'
import { motion } from 'framer-motion'
import { Heart, Shield, Leaf } from 'lucide-react'

const values = [
    {
        icon: Heart,
        title: 'Customer Satisfaction',
        description: "We focus strongly on customer satisfaction, quality and reliability. It is our mission to be the supplier of choice to our customers and to build strong and enduring relationships. We meet customers' needs and contribute to their success with timely deliveries and cost-effective solutions.",
        color: 'bg-red-100 text-red-600',
    },
    {
        icon: Shield,
        title: 'Safety & Health',
        description: 'At Dubai International Chemicals, excellence in safety, health and environmental practices is our top priority. We are committed to ensuring that our facilities meet all compliance standards and promote best operational practices.',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        icon: Leaf,
        title: 'Sustainability',
        description: 'We constantly work to improve our product line and services to meet the current and future needs of society. Sustainability is fundamental to how we do business. We bring together our expertise in many different fields and build partnerships to develop value-adding solutions.',
        color: 'bg-green-100 text-green-600',
    }
]




export default function ValuesPage() {
    return (
        <main>
            <section className="relative h-[300px] bg-gradient-to-r from-purple-600 to-purple-800">
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <h1 className="text-5xl font-bold mb-4">Our Values</h1>
                        <p className="text-xl">The principles that guide our business</p>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our core values define who we are and how we conduct business every day
                        </p>
                    </div>

                    <div className="space-y-12">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                                initial={{ opacity: 0, y: 20}}
                                whileInView={{ opacity: 1, y: 0}}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                { index % 20 === 0 ? (
                                    <>
                                        <div className="flex justify-center">
                                            <div className={`w-48 h-48 ${value.color} rounded-full flex items-center justify-center shadow-2xl`}>
                                                <value.icon size={96} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                            <p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
                                        </div>
                                    </>
                                ):(
                                    <>
                                        <div className="order-2 lg:order-1">
                                            <h3 className="text-3xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                            <p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
                                        </div>
                                        <div className="order-1 lg:order-2 flex justify-center">
                                            <div className={`w-48 h-48 ${value.color} rounded-full flex items-center justify-center shadow-2xl`}>
                                                <value.icon size={96} />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
                        <p className="text-xl max-w-3x1 mx-auto">
                            We are dedicated to maintaining the highest standards of quality, safety, and sustainability in everything we do. Our values are not just words - they are the foundation of our success and the promise we make to our customers, employees, and communities.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}