import React from 'react'
import RootLayout from '../../../layout/RootLayout'
import ServiceCard from '../../../components/service/ServiceCard'
import { RiRefund2Line, RiSecurePaymentLine } from 'react-icons/ri'
import { PiHeadsetFill } from 'react-icons/pi'

const Services = () => {
  return (
    <RootLayout className="space-y-12">
        {/* Tag */}
        <div className="w-full flex items-center justify-center text-center">
           <h1 className="text-3x1 text-neutral-800 font-bold">
            Our <span className="text-primary">Serviecs</span>
           </h1>
        </div>
          {/* Services Card */}
          <div className="w-full grid grid-cols-3 gap-10">
           <ServiceCard  icon={RiSecurePaymentLine} title={"Secure Payment"} desc={"Intergrate secure payment gateway for user to pay for their"}/>
            <ServiceCard  icon={RiRefund2Line} title={"Refound Policy"} desc={"offer option for the user to purchese refundeable ticket with clear treams "}/>
           <ServiceCard  icon={PiHeadsetFill} title={"Secure Payment"} desc={"Get assistances anytime thourght chat, gmail, or phone"}/>
          
          

          </div>  

    </RootLayout>
  )
}

export default Services