'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const newsItems = [
    {
        date: 'February 2024',
        title: 'Dubai Chamber Awards Dubai International Chemicals',
        excerpt: 'Dubai Chamber of Commerce and Industry honors Dubai International Chemicals during the exclusive "Exporter of the Month 2024" event at their Head Office. During the special ceremony, the Chairman of the Dubai Chamber presented Dubai International Chemicals with the prestigious award.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        category: 'Award',
    },
    {
        date: 'January 2024',
        title: 'Expansion of JAFZA Terminal Facility',
        excerpt: 'Dubai International Chemicals announces the completion of its expanded state-of-the-art terminal in Jebel Ali Free Zone, increasing storage capacity to 15,000 CBM. This expansion strengthens our position as a leading chemical distributor in the region.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
        category: 'Infrastructure',
    },
    {
        date: 'December 2023',
        title: 'Sustainability Initiative Launch',
        excerpt: 'Introducing green chemical solutions for the coating industry in the MENA region. Our new sustainable product line demonstrates our commitment to environmental responsibility while maintaining the highest quality standards.',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
        category: 'Sustainability',
    },
    {
        date: 'November 2023',
        title: 'Partnership with Leading Global Suppliers',
        excerpt: 'Dubai International Chemicals strengthens its global supply chain with new partnerships, ensuring continued access to premium quality chemicals for our customers across the GCC and East Africa.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
        category: 'Partnership',
    },
    {
        date: 'October 2023',
        title: 'ISO Certification Renewal',
        excerpt: 'Successfully renewed our ISO 9001:2008, ISO 14001:2004, and OHSAS 18001:2007 certifications, reaffirming our commitment to quality, environmental management, and occupational health and safety.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
        category: 'Certification',
    }, 
    {
        date: 'September 2023',
        title: 'Industry Conference Participation',
        excerpt: 'Our leadership team participated in the Gulf Petrochemicals and Chemicals Association (GPCA) annual forum, sharing insights on the future of chemical distribution in the Middle East.',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
        category: 'Event',
    },
]

export default function NewsPage() {
    return (
        <main>
            <section className="relative h-[300px] bg-gradient-to-r from-orange-600 to-orange-800">
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <h1 className="text-5xl font-bold mb-4">News & Events</h1>
                        <p className="text-xl">Stay updated with our latest achievements and announcements</p>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item, index) => (
                            <motion.article
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20}}
                                whileInView={{ opacity: 1, y: 0}}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Calendar size={16} className="mr-2" />
                                            {item.date}
                                        </div>
                                        <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                                    <button className="flex items-center text-orange-600 hover:text-orange-700 font-semibold">
                                        Read More <ArrowRight size={16} className="ml-2" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
