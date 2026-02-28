import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Industries from '@/components/Industries'
import News from '@/components/News'
import CTA from '@/components/CTA'
export default function Home() {
    return (
        <main>
            <Hero />
            <Stats />
            <Industries />
            <News />
            <CTA />
        </main>
    )
}