'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iNjAiIGhlaWdod DoiNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPS I2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPb1VzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTA iIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0 dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]opacity-30"/>
            </div>
        
            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-700"/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    className="text-center text-white"
                    initial={{ opacity: 0, y: 20}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                >
                    

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9}}
                        whileInView={{ opacity: 1, scale: 1}}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20
                        rounded-full px-6 py-2 mb-8"
                    >
                        <span className="text-sm font-medium">Let's Work Together</span>
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Partner With Us?</h2>
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-blue-100">
                        Get in touch with our team to discuss your chemical supply needs and discover how we can support your business
                    </p>

                    <div className="flex flex-col sm: flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <button className="group bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/20 flex items-center justify-center space-x-2">
                                <span>Contact Us Today</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                            </button>
                        </Link>
                        <Link href="/products">
                            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg border border-white/30 transition-all">
                                View Products
                            </button>
                        </Link>
                    </div>


                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20}}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{once: true }}
                        transition={{ delay: 0.3}}
                        className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-blue-100"
                    >
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span>ISO Certified</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"/>
                        <span>45+ Years Experience</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span>Top 10 MEA Distributor</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
    )
}


