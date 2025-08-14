import React from 'react'


const Search= () => {
  return (
        <div
                className="w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-5 animate-fade-in-up"
        >
            <div className="w-full flex items-center gap-5 justify-between">

              { /* From and input section */}
                <div className="w-[60%] flex items-center gap-5 relative">
                
                { /* From */}
                <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium flex items-center gap-x-1 rounded-lg px-2">
                  <input type="text" placeholder=' From...' className="flex-1 h-full boder-none bg-transparent focus:outline-none" />
                  <div className="w-5 h-5 text-neutral-400">
                    {/* icon */}
                  </div>
                </div>
                
                { /* To */ }
                 <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium flex items-center gap-x-6 rounded-lg px-4">
                  <input type="text" placeholder='To...' className="flex-1 h-full boder-none bg-transparent focus:outline-none" />
                  <div className="w-5 h-5 text-neutral-400">
                    {/* icon */}
                  </div>
                  </div>

                { /* Exchange button */}
                <button className="absolute w-11 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-primary">
                  {/* icon */}
                </button>

                </div>
               
              { /* data and button section */ }
              <div className="flex-1 h-14 flex items-center gap-5">
                {/* Date */}
                <div className="flex-1 h-full border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium flex items-center gap-x-1 rounded-lg px-2">
                  <input type="date"  className="flex-1 h-full boder-none bg-transparent focus:outline-none" />
                </div>

                {/* search button */}
                <button className="w-fit px-5 h-full bg-primary hover:bg-transparent border-2
                 border-primary hover:border-primary rounded-xl text-base font-medium text-neutral-50 
                 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300">
                  Search
                </button>
              </div>

            </div>

        </div>
  )
}

export default Search