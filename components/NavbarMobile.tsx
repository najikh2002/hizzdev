"use client";

import Image from "next/image";
import Hamburger from 'hamburger-react';
import { useState } from "react";

const NavbarMobile = () => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    const menuHandle = (toggled: boolean) => {
        if(toggled) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    const linkHandle = () => {
        setShow(false);
        setOpen(false);
    }

    return ( 
    <>
        <div className="w-screen h-[78px] fixed lg:hidden flex justify-between items-center px-[5%] z-30 bg-black">
              <a href="#home">
                <Image 
                    src={"/logo-mobile.svg"}
                    width={41.8}
                    height={35}
                    alt=""
                    className="object-contain"
                    />
              </a>
              <Hamburger 
                  size={32}
                  direction="right"
                  duration={0.8}
                  toggled={open && show}
                  toggle={setOpen}
                  onToggle={menuHandle}
                  color="white"
                  />
        </div>

        <div className={`${show ? 'top-[78px]' : '-top-[410px]'} transition-all duration-300 flex flex-col fixed text-white text-center bg-black/50 list-none right-0 w-full items-center z-20`}>
            <ul className="flex flex-col py-[10px]">
                <li className="text-white font-semibold px-[20px] py-[10px] tracking-widest">
                    <a href="#about" onClick={linkHandle}>About me</a>
                </li>
                <li className="text-white font-semibold px-[20px] py-[10px] tracking-widest">
                    <a href="#skills" onClick={linkHandle}>Skills</a>
                </li>
                <li className="text-white font-semibold px-[20px] py-[10px] tracking-widest">
                    <a href="#portfolio" onClick={linkHandle}>Portfolio</a>
                </li>
                <li className="text-black bg-white font-semibold px-[20px] py-[10px] tracking-widest rounded-full">
                    <a href="mailto:hizbullahnajihan@gmail.com" onClick={linkHandle}>CONTACT ME</a>
                </li>
            </ul>
        </div>
    </>

     );
}
 
export default NavbarMobile;