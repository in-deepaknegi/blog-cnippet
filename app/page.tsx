"use client"
import React, { useEffect } from 'react'
import hljs from 'highlight.js';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/home/Hero'
import Blog from '@/components/home/Blog'

import Demo from '@/components/demo.mdx'

export default function Home() {
  useEffect(() => {
    hljs.highlightAll();
}, []);
  return (
    <>
      <Navbar />
      <main className="font-sans">
        <Hero />
        <Blog />
        <Demo />
      </main>
      <Footer />
    </>
  );
}
