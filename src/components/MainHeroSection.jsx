import React from 'react'
import HeroSection from './pages/HeroSection'
import Navbar from './pages/Navbar'
import Services from './pages/Services'
import WhyUs from './pages/WhyUs'
import FeaturesSection from './pages/FeaturesSection'
import FooterSection from './pages/FooterSectoin'

const MainHeroSection = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <WhyUs />
      <FeaturesSection />
      <FooterSection />
    </div>
  )
}

export default MainHeroSection
