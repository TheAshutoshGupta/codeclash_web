import React from 'react'
import map from "../assets/MapImage.png"

function About() {
  return (
    <div className='flex py-20 px-14 md:px-16 justify-center gap-10 items-center flex-col'>
    <span className='inline-flex uppercase mx-auto font-extrabold text-4xl sm:text-3xl lg:text-5xl animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>
    About
  </span>
  <div className='flex w-full max-w-5xl justify-start items-start flex-col md:flex-row gap-10'>
    <div className='flex justify-start flex-col items-start'>
        <div className='text-xl mt-6 font-normal leading-7 tracking-wider text-center md:text-left font-["Raleway"] text-[#ccbaa9]'>
        CodeClash isn't just a hackathon—it's where over 300+ passionate developers collide, igniting sparks of innovation and birthing champions of the tech world. With themes spanning AI & web3, fintech, healthcare, edtech, and beyond, CodeClash offers a dynamic arena for collaboration, competition, and unbounded creativity.
        </div>
        <div className='text-[#ccbaa9] flex justify-center flex-col items-center md:items-start py-4'>
            <div className='text-lg text-white'>Venue :</div>
            <div className='text-center md:text-left'>GL Bajaj Institute of Technology and Management, Plot No. 2, APJ Abdul Kalam Rd, Knowledge Park III, Greater Noida, Uttar Pradesh 201306</div>
        </div>
    </div>
    <img src={map} className='z-50 w-[300px] h-[300] md:w-[500px] md:h-[500px] cursor-pointer' alt='map'/>
  </div>
  </div>
  )
}

export default About