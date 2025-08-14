import React, { Suspense } from 'react'
import Hero from './hero/Hero'

const Services = React.lazy(() => import('./services/Services'))
const TopSearch = React.lazy(() => import('./topsearch/TopSearch'))

const Home = () => {
  return (
    <div className='space-y-16 w-full min-h-screen pb-16'>
        {/* Hero */}
        <Hero />

        {/* Services */}
        <Suspense fallback={<div className="w-full text-center text-neutral-500">Loading services...</div>}>
          <Services />
        </Suspense>

        { /* Top Search */ }
        <Suspense fallback={<div className="w-full text-center text-neutral-500">Loading top searches...</div>}>
          <TopSearch />
        </Suspense>
    </div>
    
 
  
  )
}

export default Home