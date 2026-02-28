'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Award, TrendingUp } from 'lucide-react'

const stats = [
    { icon: Building2, value: '70,000', label: 'Sq M Storage', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, value: '200+', label: 'Employees', color: 'from-green-500 to-emerald-500' },
    { icon: Award, value: '45+', label: 'Years Experience', color: 'from-purple-500 to-pink-500'},
    { icon: TrendingUp, value: 'Top 10', label: 'MEA Distributor', color: 'from-orange-500 to-red-500' },
]

export default function Stats() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
                    <p className="text-xl text-gray-600">Delivering excellence across the region</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 20}}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1}}
                        >
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                                <div
                                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                />

                                <div className="relative">
                                    <div                        
                                        className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <stat.icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                                    <p className="text-gray-600 font-medium">{stat.label}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
