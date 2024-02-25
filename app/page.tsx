"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/home/Hero'
import Blog from '@/components/(pages)/home/Blog'
import Newsletter from '@/components/Newsletter'

export default function Home() {

  return (
    <>
      {/* strucuted data using micro-data */}
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
