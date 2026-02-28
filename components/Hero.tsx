'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-60 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" /> 
                <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-40" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="text-white">
                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full
                        px-4 py-2 mb-6"
                        >
                            <Sparkles size={16} className="text-blue-400" />
                            <span className="text-sm font-medium text-blue-300">Leading Chemical Distributor in MEA</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20}}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.6, delay: 0.1}}
                            className="text-5x1 md:text=7x1 font-bold mb-6 leading-tight"
                        >
                            Dubai International
                            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Chemicals
                            </span>
                        </motion.h1>
                    
                        <motion.p
                            initial={{ opacity: 0, y: 20}}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2}}
                            className="text-xl text-gray-300 mb-8 max-w-xl"
                        >
                            Delivering excellence in chemical distribution since 1979. Your trusted partner for quality chemicals across the Middle East and Africa.
                        </motion.p>
    
                        <motion.div
                            initial={{ opacity: 0, y: 20}}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.6, delay: 0.3}}
                            className="flex flex-col sm:flex-row gар-4"
                        >
                            <Link href="/products">
                                <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60">
                                    <span>Explore Products</span>
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 transition-all">
                                    Contact Us
                                </button>
                            </Link>
                        </motion.div>
                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20}}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.6, delay: 0.4}}
                            className="grid grid-cols-3 gap-8 mt-16"
                        >
                            <div>
                                <div className="text-3xl font-bold text-blue-400">45+</div>
                                <div className="text-sm text-gray-400">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-cyan-400">200+</div>
                                <div className="text-sm text-gray-400">Employees</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-purple-400">Top 10</div>
                                <div className="text-sm text-gray-400">MEA Distribution</div>
                            </div>
                        </motion.div>
                    </div>
                    {/* Right content - 3D card effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            {/* Floating cards */}
                            <motion.div
                                animate={{ y: [0, -20, 0]}}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl
                                rounded-3xl border border-white/10 p-6 shadow-2xl"
                            >
                                <div className="text-white">
                                    <div className="text-4xl font-bold mb-2">70,000</div>
                                    <div className="text-sm text-gray-300">Sq M Storage Facility</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0]}}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5}}
                                className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl
                                rounded-3xl border border-white/10 p-6 shadow-2x1"
                            >
                                <div className="text-white">
                                    <div className="text-4xl font-bold mb-2">15,000</div>
                                    <div className="text-sm text-gray-300">CBM JAFZA Terminal</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0]}}
                                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl z-10"
                            >
                                <div className="text-white">
                                    <div className="text-sm text-gray-400 mb-2">ISO Certified</div>
                                    <div className="text-2xl font-bold mb-4">Quality Assured</div>
                                    <div className="space-y-2 text-sm text-gray-300">
                                        <div>✓ ISO 9001:2008</div>
                                        <div>✓ ISO 14001:2004</div>
                                        <div>✓ OHSAS 18001:2007</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1}}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity}} className="text-white/50">
                    <ChevronDown size={32} />
                </motion.div>
            </motion.div>
        </div>
    )
}
