import React from 'react'
import RootLayout from '../../../layout/RootLayout'
import TopSearchCard from '../../../components/topsearch/TopSearchCard'

const TopSearch = () => {
  return (
    <RootLayout className="space-y-12">
           
            {/* Tag */}
        <div className="w-full flex items-center justify-center text-center">
           <h1 className="text-3x1 text-neutral-800 font-bold">
            Top Search <span className="text-primary">Routes</span>
           </h1>
        </div>

         {/* Top Search tickets routes Card */}
          <div className="w-full grid grid-cols-3 gap-5">
            <TopSearchCard  routeFrom={"Ambejogai"} routeTo={"Pune"} timeDuration={"7.5 Hrs"} price={"750"}/>
            <TopSearchCard  routeFrom={"Kalamb"} routeTo={"Pune"} timeDuration={"6.5 Hrs"} price={"800"}/>
            <TopSearchCard  routeFrom={"Pune"} routeTo={"Ambejogai"} timeDuration={"8.0 Hrs"} price={"999"}/>
            <TopSearchCard  routeFrom={"Pune"} routeTo={"Kalamb"} timeDuration={"7.8 Hrs"} price={"899"}/>
            <TopSearchCard  routeFrom={"Yermal"} routeTo={"Pune"} timeDuration={"6.8 Hrs"} price={"799"}/>
            <TopSearchCard  routeFrom={"Ambejogai"} routeTo={"Mumbai"} timeDuration={"10 Hrs"} price={"1600"}/>

          </div>
    </RootLayout>
  )
}

export default TopSearch