'use client'
import { motion } from 'framer-motion'
import { Droplet, Sparkles, Palette, Package, Factory } from 'lucide-react'

const industries = [
    {
        icon: Droplet,
        title: 'Drilling Mud Chemicals',
        description: 'Specialized chemicals for oil and gas drilling operations',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80',
    },
    {
        icon: Sparkles,
        title: 'Detergents & Personal Care',
        description: 'Quality ingredients for cleaning and personal care products',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
    },
    {
        icon: Palette,
        title: 'Perfumes & Cosmetics',
        description: 'Premium chemicals for fragrance and cosmetic manufacturing',
        image: 'https://images.unsplash.com/photo-1541643600914-786084683601?w=600&q=80',
    },
    {
        icon: Package,
        title: 'Packaging & Printing',
        description: 'Advanced solutions for packaging and ink manufacturing',
        image: 'https://images.unsplash.com/photo-1586528116311–ad8dd3c8310d?w=600&q=80',
    },
    {
        icon: Factory,
        title: 'Paint & Polymer',
        description: 'High-performance chemicals for paint and polymer production',
        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80',
    },
]

export default function Industries() {
return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
                    <p className="text-xl text-grav-600 max-w-2xl mx-auto">
                        Providing quality chemical solutions across diverse sectors
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                            initial={{ opacity: 0, y: 20}}
                            whileInView={{ opacity: 1, y: 0}}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                                    <industry.icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                                <p className="text-sm text-gray-200">{industry.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}