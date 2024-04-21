import React from 'react'
import { motion } from 'framer-motion'
import NavMenuItems from './NavMenuItems';


const NavMenu=()=> {
    const navItems = [
        "Home",
        "Theme",
        "Prizes",
        "Tracks",
        "FAQ",
    ];
  return (
    // bg-[#eee9e4]
    <motion.nav className='absolute h-screen w-screen bg-purple-700 flex flex-col items-center justify-center p-8 z-[50]'
    initial={{y:'-100%'}}
    animate={{
        y:0,
        transition:{duration:1, ease:[0.25, 1, 0.5, 1]}
    }}
    exit={{y:'-100%', transition:{duration:0.3, ease:[0.25, 1, 0.5, 1]}}}
    >
    <motion.ul 
    exit={{opacity:0, transition:{duration:0}}}>
        {navItems.map((item, index)=>
            (
            <NavMenuItems key={index} index={index+1} title={item} 
            />   
        ))}
    </motion.ul>
    </motion.nav>
  )
}


export default NavMenu


