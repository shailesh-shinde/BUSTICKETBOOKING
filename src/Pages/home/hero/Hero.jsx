import React, { Suspense } from 'react'

import RootLayout from '../../../layout/RootLayout';
import heroWebp from '../../../assets/herobg.webp'
import heroPng from '../../../assets/herobg.png'

const Search = React.lazy(() => import('./search/Search'));



const Hero = () => {
  
    return (
    <div
        
        className="w-full flex-1 h-screen bg-cover bg-no-repeat bg-top relative animate-fade-in-up"
        style={{ backgroundImage: `image-set(url(${heroWebp}) type('image/webp') 1x, url(${heroPng}) type('image/png') 1x)` }}
    >
        <RootLayout className="absoulte top-0 left-0 w-full h-full py-[9ch] bg-gradient-to-b from-neutral-50/70 via-neutral-50/5 flex items-center justify-start text-center flex-col gap-9 ">
          {/* Tital Section */}
           <div className="space-y-2">
            
            <p 
                className="text-lg text-neutral-500 font-medium animate-fade-in-up animate-delay-2"

            >
                Get you bus tickets
            </p>
            
            <h1 
                className="text-5xl text-neutral-800 font-bold capitalize animate-fade-in-up animate-delay-3"

            >
                Find Bast Bus For You!
            </h1>
        </div>
          
          {/* Search Section */}
          <Suspense fallback={<div className="w-full text-center text-neutral-500">Loading search...</div>}>
            <Search />
          </Suspense>

        </RootLayout>

    </div>
  )
}

export default Hero



