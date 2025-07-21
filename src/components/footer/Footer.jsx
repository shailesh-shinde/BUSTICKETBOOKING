import React from 'react';
import RootLayout from '../../layout/RootLayout';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';


import MasterCaedImg from "../../assets/mastercard.png"
import PaypalImg from "../../assets/paypal.png"
import CreditCardImg from "../../assets/creditcard.png"

const Footer = () => {
  return (
    <div className="w-full h-auto bg-neutral-950 py-12">
      <RootLayout className="space-y-10">
      
        {/* Footer content */}
        <div className="w-full grid grid-cols-5 gap-8">
          <div className="col-span-2 space-y-8 md:pr-10 pr-0">
            {/* Logo */}
            <Link to="/" className="text-6xl text-primary font-bold">
              Bus
            </Link>

            <p className="text-sm text-neutral-500 font-normal whitespace-normal">
              Bus is all about booking tickets through an online platform
              to make it comfortable for the passengers.
            </p>
          

          {/* Social Link */}
          <div className="w-full flex items-center gap-5">
            <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
              <FaInstagram className="w-5 h-5 text-neutral-50" />
            </div>
            
            <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
              <FaFacebookF className="w-5 h-5 text-neutral-50" />
            </div>
             
            <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
              <FaYoutube  className="w-5 h-5 text-neutral-50" />
            </div>

            <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
              <FaTwitter className="w-5 h-5 text-neutral-50" />
            </div>
          
          </div>
        </div>

          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
              Quick Links 
            </h1>
            <div className='space-y-2'> 
              
              <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300 '>
                About Us
              </Link>

              <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300 '>
                MY Account
              </Link>
              
              <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300 '>
                Reserve you Ticket 
              </Link>

              <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300 '>
                Create your account 
              </Link>
            
            </div>
          
           </div>

          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
              Top Reserverd Routes 
            </h1>
            <div className='space-y-2'> 
            <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300 '>
                Ambejogai - Pune 
              </Link>
              <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300 '>
                Pune - Ambejogai
              </Link>
              
              <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300 '>
                Kalamb - Pune
              </Link>

              <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300 '>
                Mumbai - Ambejogai
              </Link>
          </div>
          </div>

          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
              Support Links 
            </h1>
            <div className='space-y-2'> 
            <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300 '>
                Privacy Pliocy
              </Link>
              <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300 '>
                Terms & Conditions  
              </Link>
              
              <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300 '>
                Help & Support Center 
              </Link>

              <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300 '>
                FaQs 
              </Link>
          </div>
          </div>

        </div>

        {/* Separator */}
        <div className="w-full h-px bg-neutral-800/50" />

        {/* Copyright */}
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-neutral-600 font-normal">
            Copyright &copy; 2025, All rights reserverd
          </p>

             <div className="flex items-center gap-x-2">
              <div className="">
                     <img src={MasterCaedImg} alt="" className="w-fit h-9 object contain object-center" />
              </div>
              
              <div className="">
                     <img src={PaypalImg} alt="" className="w-fit h-9 object contain object-center" />
              </div>

              <div className="">
                     <img src={CreditCardImg} alt="" className="w-fit h-9 object contain object-center" />
              </div>

        </div>
        </div>
      </RootLayout>
    </div>
  );
};

export default Footer;
