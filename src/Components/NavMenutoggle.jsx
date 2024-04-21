import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"



const NavMenutoggle = ({menuOpen, setMenuOpen})=>{
     const path1Variants={
        open :{ d:"M3.06061 2.99999L21.0606 21" },
        closed :{ d: "M0 8.5L24 8.5"},
     };

     const path2Variants = {
        open : { d:"M3.00006 21.0607L21 3.06064" },
        closed : { d:"M0 15.5L24 15.5" }
     };

     const path1Controls=useAnimation();
     const path2Controls=useAnimation();

     useEffect(()=>{
        if(menuOpen){
            path1Controls.start(path1Variants.open);
            path2Controls.start(path2Variants.open);
        }
        else{
            path1Controls.start(path1Variants.closed);
            path2Controls.start(path2Variants.closed);
        }
     },[menuOpen,path1Controls, path2Controls])

  return (
    <div className="justify-self-center flex flex-col gap-2 curson-pointer stroke-white stroke-2"
    onClick={()=>setMenuOpen(!menuOpen)}>
        <svg width="24" height="24" viewBox="0 0 24 24">
        <motion.path {...path1Variants.closed} animate={path1Controls}
            transition={{duration:0.2}}
        />
        <motion.path {...path2Variants.closed} animate={path2Controls}
            transition={{duration:0.2}}
        />
        </svg>
    </div>
  )
}

export default NavMenutoggle;