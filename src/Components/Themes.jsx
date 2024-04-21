import React from 'react'
import {motion} from 'framer-motion'
import open from '../assets/ThemeImages/openInno.png'
import ai from "../assets/ThemeImages/ai.png"
import health from "../assets/ThemeImages/health.png"
import fin from "../assets/ThemeImages/fintech.png"
import web from "../assets/ThemeImages/web3.png"
import edu from "../assets/ThemeImages/edutech.png"

function Themes() {
  return (
    <div className='flex relative py-20 justify-center gap-10 items-center flex-col'>
     <div class="absolute z-10 h-full w-full"><div class=" h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
    <span className='inline-flex uppercase mx-auto font-extrabold text-4xl sm:text-3xl lg:text-5xl animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>
    Theme
  </span>
  <div className='flex justify-center items-center gap-10 flex-col '>
  <div className='flex justify-center items-center gap-10 flex-col md:flex-row'>
    <ThemeCard name={"Open Innovation"} img={open}/>
    <ThemeCard name={"AI ML"} img={ai}/>
    <ThemeCard name={"Web 3"} img={web}/>
  </div>

    <div className='flex justify-center items-center gap-10 flex-col md:flex-row'>    
    <ThemeCard name={"Health Care"} img={health}/>
    <ThemeCard name={"Edu Tech"} img={edu}/>
    <ThemeCard name={" FinTech"} img={fin}/>
    </div>
    
  </div>
  </div>
    
  )
}

function ThemeCard({name, img}){
        return (
        <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} 
         className='relative rounded-md z-50 shadow-[#ccbaa9] shadow-sm h-56 w-56'>
        
        <div className='flex h-full pt-14 shadow-lg flex-col items-center gap-6 justify-center rounded-md border border-gray-800 bg-gradient-to-b from-gray-950 to-black px-3 py-2'>
        <div><img className='object-contain h-20 w-20 invert' src={img} alt='img'/></div>
            <p className='text-sm font-semibold font-["raleway"] text-gray-200 mb-10'>{name}</p>
        </div>
        </motion.div>
        
        );
      };


export default Themes