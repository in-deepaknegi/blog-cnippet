import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/home/Hero'
import Blog from '@/components/(pages)/home/Blog'
import Newsletter from '@/components/Newsletter'

export default function Home() {

  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: 'Cnippet Blog',
    url: "https://blog.cnippet.com/",
  };

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteJsonLd)
        }}
      />

      <div itemScope itemType="https://schema.org/WebSite">
        <meta itemProp="url" content="https://blog.cnippet.com/" />
        <meta itemProp="name" content="Cnippet Blog" />
      </div>

      <Navbar />
      <main className="font-sans">
        <Hero />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
