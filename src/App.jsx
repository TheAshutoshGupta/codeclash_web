import React,{ useState } from 'react'
import Navbar from './Components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { textRevealMotion } from './utils/animations'
import NavMenu from './Components/NavMenu'
import FaqComponent from './Components/FaqComponent'
import Timeline from './Components/Timeline'
import Sponsors from './Components/Sponsors'
import logolandscape from './assets/logo-landscape.png'
import logoCircle from './assets/logo_circle.png'
import Footer from './Components/Footer'
import Prizes from './Components/Prizes'
import OurTeam from './Components/OurTeam'
import Themes from './Components/Themes'
import About from './Components/About'
import Judges from './Components/Judges'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
    
    <section  className='h-full scroll-smooth relative w-full bg-black overflow-x-hidden flex flex-col'>
    <div className="absolute h-full z-0 w-full"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#fcfcfc2e_1px,transparent_0.5px),linear-gradient(to_bottom,#fcfcfc2e_1px,transparent_0.5px)] md:bg-[size:50px_50px] bg-[size:30px_30px]"></div></div>
    <div className="absolute top-0 z-10 h-full w-full"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
    <div className="absolute top-0 z-10 h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <AnimatePresence>{menuOpen && <NavMenu/>}</AnimatePresence>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <motion.div 
    id='#'
    initial="initial"
    animate="animate"

    // sm:text-6xl sm:leading-snug md:text-7xl md:leading-tight lg:text-[6.2rem] xl:text-[8rem]
     className='text-white flex-col uppercase tracking-wider my-16 px-8 mx-auto flex text-4xl md:text-6xl md:flex-row leading-snug'>



              <div className='z-20 flex flex-col text-center items-center mx-auto max-w-xl font-["Raleway"] font-bold text-4xl sm:text-left md:text-6xl '>
                <motion.div variants={textRevealMotion(0.4)}>where coders clash 
                  and champions arise 

                  <div className='text-3xl my-6'>GLBITM, Greater Noida</div>

                  <div
                    className="apply-button"
                    data-hackathon-slug="codeclash24"
                    data-button-theme="light"
                    style={{ height: "44px", width: "312px" }}
                  ></div>

                 </motion.div>
                 
                 
              </div>
    <div className='flex justify-center items-center flex-col'>
          <motion.div className='flex justify-center items-center mb-6' variants={textRevealMotion(0)}><img src={logolandscape} alt='logo'/></motion.div>


            <div className='flex items-center justify-center z-10'>
            {/* <motion.div
            initial={{scaleX:0}}
            animate={{scaleX:1,
            transition:{duration:0.8, ease:[0.83, 0, 0.17, 1]}}}
             className='bg-white h-1 flex-1 mr-8 hidden md:block origin-left'/> */}
            <motion.div className='z-20' variants={textRevealMotion(0.2)}><img src={logoCircle} className='h-[300px] w-[300px] md:h-[400] md:w-[400]' alt='logo'/></motion.div>
           </div>
      </div>
    


              


                {/* <div className=' z-30 flex-1 text-[#ccbaa9] w-full p-8 md:pl-[20%] text-base normal-case tracking-normal leading-normal'>
                <motion.p
                initial={{opacity:0}}
                animate={{opacity:1, transition:{
                  delay:0.8,
                  duration: 0.8,
                  ease:[0.25, 1, 0.5, 1]
                }}}
                className='max-w-lg'>Simple Studio is a design studio focused on digita products that works with companies around the world, helping them to grow and expand their business
                </motion.p>
                </div> */}


    </motion.div>
    <About id="About"/>
    <Sponsors/>
    <Themes/>
    <Prizes/>
    <Judges/>

    <Timeline/>
    <OurTeam/>
    <FaqComponent id="faq"/>
    
    <Footer/>
    

    {/* //<CardSection/> */}
    </section>
    
    </>
  )
}

export default App;
