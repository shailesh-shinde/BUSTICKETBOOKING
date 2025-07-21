import React from 'react'
import Hero from './hero/hero'
import Services from './services/Services'
import TopSearch from './topsearch/TopSearch'

const Home = () => {
  return (
    <div className='space-y-16 w-full min-h-screen pb-16'>
        {/* Hero */}
        <Hero />

        {/* Services */}
        <Services />

        { /* Top Search */ }
        <TopSearch />
    </div>
    
 
  
  )
}

export default Home