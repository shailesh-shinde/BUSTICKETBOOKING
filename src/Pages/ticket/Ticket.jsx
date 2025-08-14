import React, { Suspense } from 'react'
import TopLayout from '../../layout/toppage/TopLayout'
import RootLayout from '../../layout/RootLayout'

import { motion } from 'framer-motion'

const Search = React.lazy(() => import('../home/hero/search/Search'))
const Filter = React.lazy(() => import('./filter/Filter'))
const SearchResult = React.lazy(() => import('./searchresult/SearchResult'))

const Ticket = () => {
  return (
    <div className='w-full space-y-12  pb-16'>
        {/* Top Layout */}
       <TopLayout
       bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"}
       title={"Reserve your Ticket"}
       /> 

      <RootLayout className=" space-y-12 relative">
                
                
                {/* Search section */}
                {/* fixing this section on the top to be sticky so that we can be easily change the routes */}
                <div className="space-y-5 w-full bg-neutral-50 flex py-4 items-center 
                 justify-center flex-col sticky top-0 z-30">
                
                    <motion.h1
                        initial={{ opacity: 0, y: -800 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -800}}
                        transition={{ duration: 1.35, ease: "easeOut"  }}
                        className="text-3xl text-neutral-700 font-semibold"
                  
                    >
                      want to change the route
                    </motion.h1>
                
                    {/* Search */}
                    <Suspense fallback={<div className="w-full text-center text-neutral-500">Loading search...</div>}>
                      <Search />
                    </Suspense>
                       
                </div>


                {/* Searched bus tickets */}
                    <div className="w-full h-auto grid grid-cols-4 gap-16 relative">

                       {/* Filter section  */}
                       <div className="col-span-1">
                           <Suspense fallback={<div className="text-neutral-500">Loading filters...</div>}>
                             <Filter className="space-y-4 sticky top-52 z-20" />
                           </Suspense>
                       </div>

                       {/* Search section */}
                          <Suspense fallback={<div className="col-span-3 text-neutral-500">Loading results...</div>}>
                            <SearchResult />
                          </Suspense>
                    </div>

      </RootLayout>

    </div>
  )
}

export default Ticket