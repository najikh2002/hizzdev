"use client";

import { TitleSection } from "@/components";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useRef } from "react";

const ContactSection = () => {
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_q9y9cuj', 'template_b39oalg', e.currentTarget, 'el_XVuhJlJR-1l92S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    return ( 
        <section className="about-bg" id="contact">
            <div className="flex flex-col justify-center items-center gap-[50px] py-[7%] lg:gap-[74px] lg:px-[25%]">
                <TitleSection title="contact" />
                <p className="text-center px-2 lg:px-[10%] text-black/50">
                I'm glad to hear from you! If you're interested in collaborating, have any questions, or want to discuss exciting projects, please don't hesitate to reach out to me. I'm ready to answer any inquiries and engage in discussions about great ideas.
                </p> 
                <Image 
                    src={"decoration.svg"}
                    width={170}
                    height={12}
                    alt=""
                    className="object-contain"
                />
                <form ref={form} onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} className="flex flex-col gap-[56px] justify-center items-center">

                    <input type="text" placeholder="ENTER YOUR NAME" className="input h-[48px]" style={{ background: "none" }} name="name" />
                    <input type="text" placeholder="ENTER YOUR EMAIL" className="input h-[48px]" style={{ background: "none" }} name="email" />
                    <textarea placeholder="YOUR MESSAGE" className="input h-[184px] text-start justify-start items-center" style={{ background: "none" }} name="message" ref={messageRef} />

                    <button type="submit" className="w-[177px] h-[40px] border-x-[4px] border-black uppercase text-[16px] font-bold tracking-[1.6px] lg:hover:w-[197px] transition-all duration-300 lg:cursor-pointer">
                        submit
                    </button>
                </form>
            </div>
        </section>
     );
}
 
export default ContactSection;