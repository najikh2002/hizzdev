"use client";

import { TitleSection } from "@/components";
import { portfolioItems } from "@/constans";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PortfolioSection = () => {
    const [project, setProject] = useState(0);
    const [show, setShow] = useState(0);
    
    return ( 
        <section className="w-full bg-[#1A1A1A]" id="portfolio">
            <div className="py-[20px] lg:py-[75px] flex justify-center items-center portfolio-bg">
                <TitleSection title="portfolio" />
            </div>
            <div className="flex items-center justify-center py-[10px]">
                {portfolioItems.map((item, index) => (
                    <div key={index} onClick={() => {setProject(index)}} className={`${index == project ? "border-white w-[200px]" : "border-white/50 w-[150px]"} border-b-[1px] h-[48px] text-center justify-center flex items-center transition-all duration-300 ease-in`}>
                        <p className={`${project == index ? "text-white" : "text-white/50"} uppercase text-14px font-semibold hover:text-white transition-all duration-300 cursor-pointer`}>
                            {item.platform}
                        </p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {portfolioItems[project].work.map((item) => (
                    <div className="relative overflow-hidden flex flex-col items-center justify-center group" key={item.id}>
                        <div className="flex items-center justify-center relative overflow-hidden" onClick={() => setShow(item.id)}>
                          {/* image */}
                          <Image src={item.img} width={500} height={300} alt="" className="object-contain" />
                          {/* overlay */}
                          <div className={`${show === item.id ? "opacity-100 lg:opacity-0" : "opacity-0 lg:opacity-0"} absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-100 transition-all duration-1000 ease-out flex flex-col justify-center items-center gap-[17px]`}>
                            <div className="text-white text-center flex flex-col gap-[20px] translate-y-[-30px]">
                                <h3 className="text-[10px] font-semibold tracking-[1px]"><i>{item.category}</i></h3>
                                <h2 className="text-[25px] font-bold tracking-[5px] leading-[30px]">{item.title}</h2>
                                <h3 className="text-[10px] font-light tracking-[-0.15px]">{item.subTitle}</h3>
                            </div>
                            </div>
                        </div>
                        <Link href={item.url} className={`${show === item.id ? "translate-y-[70px] lg:translate-y-[400px]" : "translate-y-[400px]"} absolute w-[90px] h-[27px] flex justify-center items-center text-white text-[12px] font-semibold tracking-[1.14px] uppercase border-x-[2px] border-white lg:group-hover:translate-y-[70px] lg:hover:w-[130px] transition-all duration-300 cursor-pointer`}>
                            view 
                        </Link>
                    </div>
                ))}
            </div>
            <div className="w-full py-[20px] flex justify-center items-center text-end">
                <p className="text-[#FFFBFB] text-[20px] font-semibold">And many more to come!</p>
            </div>
        </section>
     );
}
 
export default PortfolioSection;