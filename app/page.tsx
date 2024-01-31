import React from "react";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/home/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
