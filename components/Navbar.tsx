"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = ({ styles }: {styles: string}) => {
    const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    return ( 
        <nav className={`${styles} ${scrollY > 200 ? "bg-black/50" : "bg-transparent pt-[25px]"} justify-between items-center top-0 right-0 h-[66px] w-full transition-all duration-300`}>
           <Image 
            src={"/logo.svg"}
            width={40}
            height={40}
            alt=""
            className="object-contain"
           /> 
           <div className="flex gap-[33px] justify-center">
                <ul className="flex justify-between w-[287px] items-center">
                    <li className="flex font-bold text-[17px] hover:text-white text-primary transition-all duration-300"><a href="#about">About me</a></li>
                    <li className="flex font-bold text-[17px] hover:text-white text-primary transition-all duration-300"><a href="#skills">Skills</a></li>
                    <li className="flex font-bold text-[17px] hover:text-white text-primary transition-all duration-300"><a href="#portfolio">Portfolio</a></li>
                </ul>

                <a href="mailto:hizbullahnajihan@gmail.com" className="w-[147px] h-[46px] flex justify-center items-center text-[13px] font-bold tracking-[0.5px] bg-white rounded-full hover:opacity-70 transition-all duration-300">
                    CONTACT ME
                </a>
           </div>
           
        </nav>
     );
}
 
export default Navbar;