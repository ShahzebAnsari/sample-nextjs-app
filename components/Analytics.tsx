import Script from 'next/script'
// Replace with your actual Google Analytics Measurement ID
// Get it from: https://analytics.google.com
const GA_MEASUREMENT_ID =  'G-XXXXXXXXXX'

export default function Analytics() {
    return  (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'S{GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname
                    });
                `}
            </Script>
        </>
    )
}