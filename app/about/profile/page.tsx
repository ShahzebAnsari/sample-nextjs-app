'use client'

import { motion } from 'framer-motion'
import { Award, Users, Globe, TrendingUp } from 'lucide-react'

const milestones = [
    { year: '1979', event: 'Company established in Dubai, UAE' },
    { year: '1990', event: 'First to import bulk IPA to UAE' },
    { year: '2000', event: 'Expanded to GCC and East Africa' },
    { year: '2015', event: 'Ranked 10th largest chemical distributor in MEA' },
    { year: '2024', event: 'Over 200 employees and 70,000 sq m facilities' },
]

const certifications = ['ISO 9001:2008', 'ISO 14001:2004', 'OHSAS 18001:2007']

export default function ProfilePage() {
    return (
        <main>
            <section className="relative h-[300px] bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <h1 className="text-5xl font-bold mb-4">Company Profile</h1>
                        <p className="text-xl">Our journey of excellence since 1979</p>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div initial={{ opacity: 0, y: 20}} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true }}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                In 1979, Dubai International Chemicals was established in Dubai, United Arab Emirates. With visionary
                                leadership and guidance, we have grown over the past 45+ years from a small trading house to a diversified
                                group of companies.
                            </p>

                            <p className="text-gray-600 mb-4">
                                Today, Dubai International Chemicals is one of the UAE's leading, well-diversified, multi-product industrial chemical distributor. We were the first company to import bulk IPA into the United Arab Emirates.
                            </p>
            I
                            <p className="text-gray-600">
                                We supply our products, including solvents and basic chemicals, to a wide range of industries in the GCC and East African countries. The world is changing faster than ever before, and we constantly explore how we can respond to growing demands and serve our customers in the best possible manner.
                            </p>
                        </motion.div>
            
                        <motion.div
                            initial={{ opacity: 0, y: 20}}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Highlights</h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                                    <Award className="text-blue-600 flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Industry Leader</h3>
                                        <p className="text-gray-600">10th largest chemical distributor in Middle East & Africa</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                                    <Users className="text-green-600 flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Experienced Team</h3>
                                        <p className="text-gray-600">200+ dedicated employees with extensive industry experience</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                                    <Globe className="text-purple-600 flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Regional Presence</h3>
                                        <p className="text-gray-600">7 offices across the United Arab Emirates</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                                    <TrendingUp className="text-orange-600 flex-shrink-0" size={24} />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Innovation Pioneer</h3>
                                        <p className="text-gray-600">First to import bulk IPA to UAE</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>    
            </section>
                    
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row': 'flex-row-reverse'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1}}
                            >
                                <div className={`w-5/12 ${index % 2 == 0 ? 'text-right pr-8': 'text-left pl-8'}`}>
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <span className="text-2x1 font-bold text-blue-600">{milestone.year}</span>
                                        <p className="text-gray-600 mt-2">{milestone.event}</p>
                                    </div>
                                </div>
                                <div className="w-2/12 flex justify-center">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow" />
                                </div>
                                <div className="w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Certifications</h2>
                    <p className="text-gray-600 mb-8">We maintain strict health and safety standards</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="bg-blue-50 px-8 py-4 rounded-lg border-2 border-blue-200"
                                initial={{ opacity: 0, scale: 0.9}}
                                whileInView={{ opacity: 1, scale: 1}}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1}}
                            >
                                <span className="text-lg font-semibold text-blue-600">{cert}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
