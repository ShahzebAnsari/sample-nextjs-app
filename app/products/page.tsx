'use client'

import { motion} from 'framer-motion'
import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import productsData from '@/data/products.json'

const industries = ['all', 'drilling', 'detergent', 'cosmetics', 'food', 'pharma', 'paint', 'plastic', 'textile', 'paper']

export default function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedIndustry, setSelectedIndustry] = useState('all')

    const filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.cas.includes (searchTerm)
        const matchesIndustry = selectedIndustry === 'all' || product.industries.includes(selectedIndustry)
        return matchesSearch && matchesIndustry
    })

    return (
        <main>
            <section className="relative h-[300px] bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <h1 className="text-5xl font-bold mb-4">Our Products</h1>
                        <p className="text-xl">Comprehensive range of quality chemicals</p>
                    </div>
                </div>
            </section>
        
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <div className="flex flex-col md:flex-row gap-4 mb-6">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search by product name or CAS number..."
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-1g focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <Filter size={20} className="text-gray-600" />
                            <span className="text-gray-600 font-semibold">Filter by Industry:</span>
                            {industries.map(industry => (
                                <button
                                    key={industry}
                                    onClick={() => setSelectedIndustry(industry)}
                                    className={`px-4 py-2 rounded-lg transition capitalize ${selectedIndustry === industry ? 'bg-blue-600 text-white': 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                >
                                    {industry}
                                </button>
                            ))}
                        </div>
                    </div>
        
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <motion.div
                                key={product.id}
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                                initial={{ opacity: 0, y: 20}}
                                animate={{ opacity: 1, y: 0}}
                            >
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{product.category}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                                    <p className="text-sm text-gray-600 mb-4">
                                        <span className="font-semibold">CAS:</span> {product.cas}
                                    </p>
                                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                        Request Quote
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
        
                    {filteredProducts.length===0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No products found matching your criteria</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}
