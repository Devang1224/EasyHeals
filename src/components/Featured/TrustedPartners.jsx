import React from 'react'
import p1 from "../../assets/image 13.png";
import p2 from "../../assets/image 14.png";
import p3 from "../../assets/image 12.png";
import p4 from "../../assets/image 10.png";
import p5 from "../../assets/image 11.png";

const TrustedPartners = () => {
  return (
    <div className='flex flex-col my-32 text-[25px] font-medium items-center w-full relative'>

      <hr className='w-[82%] absolute bg-black top-[7.5%] z-[-1] '/>
       <p className='flex items-center bg-white'>
           <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
             <path d="M17 11.0667H11.2V17H5.8V11.0667H0V5.96667H5.8V0H11.2V5.96667H17V11.0667Z" fill="#4DAE45"/>
           </svg>
        <p className=' px-7'>Our Trusted Partners</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
             <path d="M17 11.0667H11.2V17H5.8V11.0667H0V5.96667H5.8V0H11.2V5.96667H17V11.0667Z" fill="#4DAE45"/>
           </svg>
          
        </p>
       <div className='flex w-full justify-between px-24 py-20'>
          <img src={p1} alt="brand image" className='max-w-[14%] object-contain'/>
          <img src={p2} alt="brand image" className='max-w-[14%] object-contain'/>
          <img src={p3} alt="brand image" className='max-w-[14%] object-contain'/>
          <img src={p4} alt="brand image" className='max-w-[14%] object-contain'/>
          <img src={p5} alt="brand image" className='max-w-[14%] object-contain'/>
       </div>
    </div>
  )
}

export default TrustedPartners