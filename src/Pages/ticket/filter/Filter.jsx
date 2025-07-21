import React from 'react'
import PriceRangeSlider from '../../../components/pricerange/PriceRangeSlider';

const Filter = ({ className }) => {


  const [rangeValues, setRangeValues] =React.useState({
    min:0,
    max:100,
  });

  const handleRangeChange = (values) => {
        setRangeValues({ values });
  };

  return (
     <div className={`w-full ${className}`}>
         

      <h1 className="tect-xl text-neutral-700 font-semibold">
          Apply filters
      </h1>
        
     {/* price filters */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 
       space-y-1">
            <h1 className="tect-lg text-neutral-600 font-medium">
                Apply filters
            </h1>
            <PriceRangeSlider 
                 min={1000}
                 max={3000}
                 onChange={handleRangeChange}
            />  
      </div>
     {/* Bus Types filter */}
          <div className="w-full border border-neutral-300 rounded-xl p-4 
            space-y-3">
  <h1 className="text-lg text-neutral-600 font-medium">
    Bus Types 
  </h1>

  <div className="space-y-2.5">
    <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="ac-deluxe"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="ac-deluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
        AC Deluxe <span className="text-xs text-neutral-600">(10)</span>
      </label>
    </div>

    <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="tourist-deluxe"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="tourist-deluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
        Tourist AC Deluxe <span className="text-xs text-neutral-600">(10)</span>
      </label>
    </div>

    <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="airsusp"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="airsusp" className="text-sm text-neutral-600 font-normal cursor-pointer">
        Air Suspension <span className="text-xs text-neutral-600">(10)</span>
      </label>
    </div>

    <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="luxuryac"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
       <label htmlFor="luxuryac" className="text-sm text-neutral-600 font-normal cursor-pointer">
        Luxury Ac Duluxe <span className="text-xs text-neutral-600">(10)</span>
      </label>
    </div>
  </div>
          </div>

       {/* Bus Companies */}
          <div className="w-full border border-neutral-300 rounded-xl p-4 
            space-y-3">
  <h1 className="text-lg text-neutral-600 font-medium">
    Bus Companies
  </h1>

  <div className="space-y-2.5">
    <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="sworgadwarideluxe"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="sworgadewarideluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
        Sworgadwari Deluxe <span className="text-xs text-neutral-600">(10)</span>
      </label>
    </div>

    <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="Pokharadeluxe"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="Pokhradeluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
        Pokhra Deluxe <span className="text-xs text-neutral-600">(10)</span>
      </label>
    </div>

    <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="mustangdeluxe"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="mustangdeluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
         Mustang Deluxe <span className="text-xs text-neutral-600">(10)</span>
      </label>
    </div>

    <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="lumbinideluxe"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
       <label htmlFor="lumbinideluxe" className="text-sm text-neutral-600 font-normal cursor-pointer">
        Lumbini Duluxe <span className="text-xs text-neutral-600">(10)</span>
      </label>
    </div>
  </div>
          </div>


     {/* Amenities filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 
            space-y-3">
  <h1 className="text-lg text-neutral-600 font-medium">
    Amenities 
  </h1>

  <div className="space-y-2.5">
    <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="internet"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="internet" className="text-sm text-neutral-600 font-normal cursor-pointer">
        internet/wifi 
      </label>
    </div>

    <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="acairsuspension"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="acairsuspension" className="text-sm text-neutral-600 font-normal cursor-pointer">
        Ac & Air Suspension
      </label>
    </div>

    <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="waterbottles"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="waterbottles" className="text-sm text-neutral-600 font-normal cursor-pointer">
        Water Bottles
      </label>
    </div>

     <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="tvmusic"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="tvmusic" className="text-sm text-neutral-600 font-normal cursor-pointer">
        LED TV & Music
      </label>
    </div>

     <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="chargingport"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="chargingport" className="text-sm text-neutral-600 font-normal cursor-pointer">
        Charging port
      </label>
    </div> 

     <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="fan"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="fan" className="text-sm text-neutral-600 font-normal cursor-pointer">
        Fan
      </label>
    </div> 

     <div className="w-full flex items-center gap-2">
      <input
        type="checkbox"
        id="superac"
        className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
      />
      <label htmlFor="superac" className="text-sm text-neutral-600 font-normal cursor-pointer">
        Super Ac
      </label>
    </div>

    
        </div>
       </div>
     </div>
  )
}

export default Filter