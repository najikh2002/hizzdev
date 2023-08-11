"use client";

import { useState } from "react";

const ShortDescSection = () => {
    const [more, setMore] = useState(false);

    const moreHandle = () => {
        if(more) {
            setMore(false)
        } else {
            setMore(true);
        }
    }

    return ( 
        <section className="flex flex-col px-[5%] xl:px-[10%] pt-[40px] pb-[60px] gap-6 text-white shortdesc-bg" id="short-desc">
            <h2 className="uppercase font-bold text-[30px] tracking-widest z-20">
                hizzdev
            </h2>
            <p className={`font-sans text-[15px] transition-all duration-200 ${more ? "lg:h-[380px]" : "lg:h-[160px]"}`}>
            Welcome to my creative world! I'm thrilled that you've taken the time to explore this digital portfolio. Here, you'll discover the traces of my journey as a UI creator, a code explorer, and a design enthusiast.
            <br /><br />

            With every line of code I write and every layout I craft, I strive to create experiences that transcend mere visual aesthetics. I believe that technology acts as a bridge between imagination and reality, and this is where I stand: bridging that gap with captivating ideas and innovations that push boundaries{ more ? "" : "..." } 

            { more ? (<p><br />
            I've combined skills in HTML5, CSS3, JavaScript, and more to create interfaces that are responsive, interactive, and elegant. Frameworks like ReactJS and Next.js have been my allies on this journey, aiding me in swiftly and efficiently transforming ideas from conception to reality.
            <br /><br />
            However, this portfolio isn't just about codes and captivating designs. It's about a dedication to adding value to every project, about weaving stories through interfaces, and about making user experience a top priority.<br /><br />

            I want you to feel inspired, impressed, and perhaps a little dazzled by the works I've presented here. Thank you for joining me on this journey, and I hope you find inspiration in the digital world I've crafted. Enjoy exploring!

            Selamat menjelajahi!
            </p>) : "" }
            </p>
            <button onClick={moreHandle} className="uppercase w-[139px] h-[25px] border-x-[2px] border-white lg:hover:w-[145px] transition-all duration-300">
                { more ? "hide" : "read more" }
            </button>
        </section>
     );
}
 
export default ShortDescSection;