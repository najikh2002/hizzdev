import { socialIcons, socialIconsMobile } from "@/constans";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
    return ( 
        <section className="h-screen w-full overflow-hidden relative px-[5%] xl:px-[10%]" id="home">
            <div className="flex">
                <div className="hidden lg:flex flex-col justify-around h-screen">
                    <div className="h-[45vh] flex flex-col justify-end">
                        <h2 className="text-[25px] font-semibold text-black">Hi, I am</h2>
                        <h1 className="text-[40px] font-bold text-black">Hizbullah Najihan</h1>
                        <h3 className="text-[25px] font-semibold text-black/30 tracking-wider">Front-end Developer</h3>
                    </div>
                    <div className="flex gap-8">
                        {socialIcons.map((item) => (
                            <div className="p-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-black/20 hover:opacity-75 transition-all duration-300 rounded-md hover:-translate-y-1 transform" key={item.name}>
                                <Link href={item.url}>
                                    {React.cloneElement(item.icon, { size: item.size })}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-[583px] absolute -right-[150px] md:right-[80px] lg:right-[60px] xl:right-[150px] bottom-0 lg:max-w-[50%] -z-20">
                    <Image
                        src={"/hero-image5.png"}
                        width={835}
                        height={917}
                        alt=""
                        className="object-contain"
                    />
                </div>
            </div>
            {/* overlay desktop */}
            <div className="hidden lg:flex absolute -z-30 w-[1800px] h-[1373px] bg-black top-0 -right-[950px] xl:-right-[780px] rotate-[96.8deg]" />
            <div className="absolute -z-40 w-full h-screen top-0 left-0 bg-primary" />

            {/* overlay mobile */}
            <div className="absolute lg:hidden w-[1200px] h-[1800px] -left-[120px] -top-[100px] overflow-hidden">
                {/* black */}
                <div className="relative bg-black -z-30 w-full h-[80vh] -rotate-[10deg]" />
                {/* white transparent */}
                <div className="relative bg-black/50 z-0 w-full h-screen -rotate-[10deg]" />
            </div>

            {/* hero text mobile */}
            <div className="flex lg:hidden absolute bottom-[5%] left-[4%] flex-col">
                <h3 className="text-[20px] font-bold text-white">Hi, I am</h3>
                <h2 className="text-[34px] font-bold text-white">Hizbullah Najihan</h2>
                <p className="text-[12px] font-semibold text-white">Front-end Developer</p>
            </div>
            {/* socials icons */}
            <div className="absolute flex flex-col lg:hidden bottom-[5%] right-[4%] gap-[29px] list-none">
                {socialIconsMobile.map((item) => (
                    <li key={item.name}>
                        <a href={item.url}>
                            {React.cloneElement(item.icon, {size: item.size, color: item.color})}
                        </a>
                    </li>
                ))}
            </div>
        </section>
     );
}
 
export default HeroSection;