import React from 'react';
import { motion } from 'framer-motion';

const NavMenuItems = ({ index, title }) => {
  const scrollToSection = () => {
    const section = document.getElementById(title.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.h1
      initial={{
        opacity: 0,
        rotateX: 90,
      }}
      animate={{
        opacity: 1,
        rotateX: 0,
        transition: {
          duration: 0.3,
          opacity: { duration: 0.15 },
          delay: 0.2 + index * 0.1,
        },
      }}
      exit={{ opacity: 0 }}
      onClick={scrollToSection}
      className='uppercase tracking-wide font-bold text-white text-5xl font-["raleway"] text-center m-10 md:m-6 md:text-3xl sm:m-4 sm:text-3xl flex-1 cursor-pointer'
    >
      {title}
    </motion.h1>
  );
};

export default NavMenuItems;
