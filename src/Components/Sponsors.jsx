import React, { useRef } from 'react';
import devfolio from "../assets/sponsor_logos/devfolio.png";
import ethindia from "../assets/sponsor_logos/ethindia.png";
import polygon from "../assets/sponsor_logos/polygon.png";

function Sponsors() {
    const logosRef = useRef(null);

    return (
        <div className='w-full h-full flex flex-col gap-10 justify-center items-center p-10'>
            <span className='inline-flex uppercase mx-auto font-extrabold text-4xl lg:text-5xl sm:text-3xl animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>
                Sponsors
            </span>

            <div className="w-screen h-full flex justify-center items-center gap-6 overflow-hidden">
                <ul ref={logosRef} className="flex flex-col gap-10 items-center justify-center md:justify-start md:flex-row">
                    <li>
                        <img src={devfolio} alt="Devfolio" className='h-10'/>
                    </li>
                    <li>
                        <img src={ethindia} alt="EthIndia" className='h-10'/>
                    </li> 
                    <li>
                        <img src={polygon} alt="Polygon" className='h-10'/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sponsors;
