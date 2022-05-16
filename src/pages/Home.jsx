import React from 'react'
import Hero from '../components/Hero'
import ProductsSection from '../components/ProductsSection'
import WhoWeAreSection from '../components/WhoWeAreSection'
import PersonalServiceSection from '../components/PersonalServiceSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Hero />
        <WhoWeAreSection />
        <ProductsSection />
        
        <PersonalServiceSection />
        <Footer />
    </>
  )
}

export default Home