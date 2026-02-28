'use client'

import { motion } from 'framer-motion'
import { Award, TrendingUp} from 'lucide-react'

const suppliers = [
    {
        name: 'TATA Chemicals',
        logo: 'https://via.placeholder.com/200x80/0066cc/ffffff?text=TATA',
        years: '30+',
        description: "Over 30 years of distributing TATA's products in the Middle East region. Leading supplier of soda ash and other industrial chemicals.",
        products: ['Soda Ash', 'Salt', 'Sodium Bicarbonate'],
    }, 
    {
        name: 'Shell Chemicals',
        logo: 'https://via.placeholder.com/200x80/dd1d21/ffffff?text=SHELL',
        years: '30+',
        description: 'Over 30 years of relationship with Shell Chemicals. Trusted partner for premium solvents and chemical products.',
        products: ['Solvents', 'Base Oils', 'Specialty Chemicals'],
    },
    {
        name: 'The Dow Chemical Company',
        logo: 'https://via.placeholder.com/200x80/cc0000/ffffff?text=DOW',
        years: '25+',
        description: "Over 25 years of supplying Dow's quality products in the region. Leading provider of plastics and specialty chemicals.",
        products: ['Polyethylene', 'Polypropylene', 'Glycol Ethers'],
    },
    {
        name: 'Sasol',
        logo: 'https://via.placeholder.com/200x80/0099cc/ffffff?text=SASOL',
        years: '20+',
        description: 'Over 20 years of relationship with Sasol and currently distributing their products for GCC. Specialized in waxes and solvents.',
        products: ['Waxes', 'Solvents', 'Alcohols'],
    },
    {
        name: 'Al Kout Industrial Projects',
        logo: 'https://via.placeholder.com/200x80/006633/ffffff?text=AL+KOUT',
        years: '15+',
        description: 'Long-standing partnership providing industrial chemicals and materials for various applications.',
        products: ['Industrial Chemicals', 'Polymers'],
    },
    {
        name: 'Shiny Chemical',
        logo: 'https://via.placeholder.com/200x80/ff9900/ffffff?text=SHINY',
        years: '10+',
        description: 'Trusted supplier of specialty chemicals and additives for multiple industries.',
        products: ['Additives', 'Specialty Chemicals'],
    }
]

export default function SuppliersPage() {
    return (
        <main>
            <section className="relative h-[300px] bg-gradient-to-r from-purple-600 to-purple-800">
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <h1 className="text-5xl font-bold mb-4">Our Suppliers</h1>
                        <p className="text-xl">Partnering with world-renowned chemical manufacturers</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Partnerships</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our global sourcing strategy and established long-term relations with major multinational manufacturers give us the competitive edge and enable us to make long-term supply contracts with leading industries in the region.
                        </p>
                    </div>
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {suppliers.map((supplier, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple-600 hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20}}
                                whileInView={{ opacity: 1, y: 0}}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1}}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="bg-gray-100 px-6 py-3 rounded-lg">
                                        <img src={supplier.logo} alt={supplier.name} className="h-12" />
                                    </div>
                                    <div className="flex items-center space-x-2 text-purple-600">
                                        <TrendingUp size={20} />
                                        <span className="font-bold text-lg">{supplier.years} Years</span>
                                    </div>
                                </div>
                
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{supplier.name}</h3>
                                <p className="text-gray-600 mb-4">{supplier.description}</p>
                
                                <div className="border-t pt-4">
                                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Products:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {supplier.products.map((product, idx) => (
                                            <span key={idx} className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                                                {product}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-white">
                        <div className="flex items-center justify-center mb-6">
                            <Award size={48} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-center">Approved Distributor</h2>
                        <p className="text-xl text-center max-w-3xl mx-auto">
                            We are the approved distributors of world-renowned companies, ensuring authentic products and reliable supply chains for our customers across the Middle East and Africa.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}