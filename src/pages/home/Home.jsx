import React from 'react'
import Hero from './Hero'
import ProductsSection from './ProductsSection'
import WhoWeAreSection from './WhoWeAreSection'
import PersonalServiceSection from './PersonalServiceSection'
import Footer from '../../shared/Footer';

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