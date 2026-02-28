'use client'

import { motion} from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const news = [
    {
        date: 'Feb 2024',
        title: 'Dubai Chamber Awards Recognition',
        excerpt: 'Dubai International Chemicals honored as Exporter of the Month for outstanding contribution to regional trade.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    },
    {
        date: 'Jan 2024',
        title: 'Expansion of Storage Facilities',
        excerpt: 'New state-of-the-art terminal in JAFZA increases storage capacity to 15,000 CBM.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    },
    {
        date: 'Dec 2023',
        title: 'Sustainability Initiative Launch',
        excerpt: 'Introducing green chemical solutions for coating industry in MENA region.',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80',
    }
]

export default function News() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
                    <p className="text-xl text-gray-600">Stay updated with our recent achievements and announcements</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <motion.article
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <Calendar size={16} className="mr-2" />
                                    {item.date}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                                    Read More <ArrowRight size={16} className="ml-2" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
