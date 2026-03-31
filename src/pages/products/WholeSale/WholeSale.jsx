import React from 'react'
import Hero from './sections/Hero'
import AboutUs from './sections/AboutUs'
import Features from './sections/Features'
import WhyChooseUs from './sections/WhyChooseUs'
import TechStack from '../../../components/Common/TechStack'
import GallerySection from './sections/GallerySection'
import FinalCTA from './sections/FinalCTA'

const WholeSale = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Features/>
        <WhyChooseUs/>
        <TechStack
  techs={[
    'Spring Boot',
    'Java',
    'PostgreSQL',
    'Redis',
    'Docker',
    'Kubernetes',
    'AWS',
    'Kafka'
  ]}
  title="Backend & Infrastructure Stack"
  description="Robust and scalable backend powering real-time inventory operations"
  badgeText="Core Tech Stack"
  variant="default"
/>
<GallerySection/>
<FinalCTA/>
    </div>
  )
}

export default WholeSale