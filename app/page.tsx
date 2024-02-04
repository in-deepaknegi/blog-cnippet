import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/home/Hero'
import Blog from '@/components/(pages)/home/Blog'

export default function Home() {

  return (
    <>
      <Navbar />
      <main className="font-sans">
        <Hero />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
