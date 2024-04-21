import React from 'react';
import NavMenutoggle from './NavMenutoggle';
import logoCircle from '../assets/logo_circle.png';
import glb from '../assets/glbitm_logo.png'
import ButtonRotatingBackgroundGradient from './ButtonRotatingBackgroundGradient';


const Navbar=({menuOpen, setMenuOpen})=> {
  return (
    <div className='grid grid-cols-3 justify-between items-center p-8 sticky z-[100]'>
      <div className='w-[200px] text-white text-2xl flex gap-2 font-bold'>
        <img src={logoCircle} alt='logo' className='h-12'/>
        <img src={glb} alt='logo' className='h-12 hidden md:block'/>
      </div>

      <NavMenutoggle menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <ButtonRotatingBackgroundGradient title={"Get in Touch"}/>
    </div>
  );
}

export default Navbar;
