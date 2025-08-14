import React, { useEffect, useState, memo } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6'; // Ensure you have the correct package installed
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Tickets", link: "/bus-tickets" },
    { label: "About", link: "/about" },
    
  ];

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // Hide the navbar when scrolling down and show it when scrolling up
      if (currentScrollPosition > scrollPosition && currentScrollPosition > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Update the scroll position state
      setScrollPosition(currentScrollPosition);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav className={`w-full h-[8ch] flex top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 backdrop-blur-lg transition-transform duration-300 z-50 
    ${isVisible ? "translate-y-0" : "-translate-y-full"}
     ${scrollPosition > 50 ? "bg-violet-500" : "bg-neutral-100/10"}`}>
      <div className='w-full h-full flex items-center justify-between'>
       {/* Logo section */}
        <Link to="/" className='text-4xl text-primary font-bold'>
          Bus
        </Link>
         {/* Hamburger menu */}
        <div className='w-fit md:hidden flex items-center justify-center cursor-pointer flex-col gap-16 text-neutral-700' onClick={handleOpen}>
          {open ? <FaX className='w-5 h-5' /> : <FaBars className='w-5 h-5' />}
        </div>

        {/* Navigation links and button */}
        <div className={`${open ? "flex absolute top-20 left-0 w-full h-auto md:relative" : "hidden"} flex-1 md:flex flex-col md:flex-row md:gap-14 gap-8 md:items-center items-start md:p-0 p-4 justify-end md:bg-transparent bg-neutral-50 border md:border-transparent border-neutral-200 sm:shadow-none md:shadow-sm rounded-xl`}>
          <ul className='list-none flex md:items-center items-start flex-wrap md:gap-8 gap-4 text-lg text-neutral-500 font-normal'>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.link} className='hover:text-primary ease-in-out duration-300'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex items-center justify-center'>
            <button className="md:w-fit w-full md:px-4 px-6 md:py-1 py-2.5 bg-primary hover:bg-transparent border-primary hover:border-primary md:rounded-full rounded-xl text-base font-normal text-neutral-50 hover:text-primary ease-in-out duration-300">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
