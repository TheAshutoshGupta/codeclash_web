import React from 'react'

import harsh from '../assets/teamImages/harshraj.png'
import harshdeep    from '../assets/teamImages/harshdeep.jpeg'
import bhuvnesh    from '../assets/teamImages/bhuvnesh.jpeg'
import ayush       from '../assets/teamImages/ayushkumar.jpeg'
import prachi       from "../assets/teamImages/prachi.jpeg"
import priyanshi  from "../assets/teamImages/priyanshi.jpg"
import ashu        from "../assets/teamImages/ashu.jpg"
import aadhya      from "../assets/teamImages/aadhya.jpeg"
import amrita     from "../assets/teamImages/amrita.jpeg"
import neelesh    from "../assets/teamImages/neelesh.jpeg"
import jigisha    from "../assets/teamImages/Jigisha.png"
import neha        from "../assets/teamImages/neha.jpeg"


function OurTeam() {
  return (
    <div className='flex px-14 justify-center gap-10 items-center flex-col'>
    <span className='inline-flex uppercase mx-auto font-extrabold text-4xl sm:text-3xl lg:text-5xl animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>
    Our Team
    
    </span>
    <div className='max-w-5xl flex flex-none flex-wrap cursor-pointer justify-center gap-10 item-row items-center'>
    <Cards img={harsh} name={"Harsh Raj"} post={"Lead Organizer"} linkedin={"https://www.linkedin.com/in/harshraj2717/"}/>
    {/* LinkedIn 
https://www.linkedin.com/in/harshraj2717/
https://www.linkedin.com/in/harsh-deep-313ba6248

https://www.linkedin.com/in/prachi-agarwal-000378230/
https://www.linkedin.com/in/aadhyaa-pahariya-9181a9222/
https://www.linkedin.com/in/amrita-yadav-521523201/

https://www.linkedin.com/in/priyanshi-agrawal-a428aa201/
https://www.linkedin.com/in/neeleshmaurya/
https://in.linkedin.com/in/jigisha-baliyann

https://www.linkedin.com/in/neha-rajvanshi-a180b0214/

https://www.linkedin.com/in/ashutooshgupta/ */}


    <Cards img={harshdeep} name={"Harsh Deep"} post={"Lead Organizer"} linkedin={"https://www.linkedin.com/in/harsh-deep-313ba6248"}/>
    <Cards img={bhuvnesh} name={"Bhuvnesh Sharma"} post={"Lead Organizer"} linkedin={"https://www.linkedin.com/in/bhuvnesh-sharma-a7560a203/"}/>
    <Cards img={ayush} name={"Ayush Kumar"} post={"Github Campus Expert"} linkedin={"https://www.linkedin.com/in/ayush-kumar-984443191/"}/> 
    <Cards img={prachi} name={"Prachi Agarwal"} post={"Content Lead & Co-host"} linkedin={"https://www.linkedin.com/in/prachi-agarwal-000378230/"}/>   
    <Cards img={priyanshi} name={"Priyanshi Agarwal"} post={"Design Lead"} linkedin={"https://www.linkedin.com/in/priyanshi-agrawal-a428aa201/"}/>
    <Cards img={neha} name={"Neha Rajvanshi"} post={"Social Media Lead"} linkedin={"https://www.linkedin.com/in/neha-rajvanshi-a180b0214/"}/>     
    <Cards img={ashu} name={"Ashutosh Gupta"} post={"Technical Team"} linkedin={"https://www.linkedin.com/in/ashutooshgupta/"}/>     
    <Cards img={aadhya} name={"Aadhya Pahariya"} post={"Content Team"} linkedin={"https://www.linkedin.com/in/aadhyaa-pahariya-9181a9222/"}/>   
    <Cards img={amrita} name={"Amrita Yadav"} post={"Content Team"} linkedin={"https://www.linkedin.com/in/amrita-yadav-521523201/"}/>   
    <Cards img={neelesh} name={"Neelesh Maurya"} post={"Design Team"} linkedin={"https://www.linkedin.com/in/neeleshmaurya/"}/>  
    <Cards img={jigisha} name={"Jigisha Baliyann"} post={"Design Team"} linkedin={"https://in.linkedin.com/in/jigisha-baliyann"}/>  
    </div>
    </div>
  )
}


function Cards({img, name, post, linkedin}){
    return(
    
        <a href={linkedin} target='_blank' className="relative z-50 h-[400px] hover:scale-110 transition delay-100 duration-100 cursor-pointer w-[300px] md:h-[300px] md:w-[200px] rounded-md">
    
    <img
        src={img}
        alt="img"
        className="z-0 h-full w-full rounded-md object-cover cursor-pointer"
      />
    
      
      <div className="absolute cursor-pointer inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute cursor-pointer bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{name}</h1>
        <p className="mt-0 text-sm text-gray-300">
          {post}
        </p>
        {/* <button className="mt-1 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button> */}
        <button class="group z-50 relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md font-medium text-neutral-200 duration-500"><div class="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">Connect</div><div class="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg></div></button>
      </div>
    </a>
    
    
        
    )
}

export default OurTeam