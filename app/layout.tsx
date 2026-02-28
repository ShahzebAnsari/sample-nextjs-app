import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Dubai International Chemicals - Leading Chemical Distributor',
    description: 'Premier chemical distribution company serving the Middle East and Africa with quality products and reliable service.',
}

export default function RootLayout({ children }: { children: React. ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Analytics />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}