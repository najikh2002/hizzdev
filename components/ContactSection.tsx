"use client";

import { TitleSection } from "@/components";
import Image from "next/image";
import { useRef } from "react";

const ContactSection = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let data = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            phone: phoneRef.current?.value,
            message: messageRef.current?.value,
        }

        await fetch("api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json , text/plain",
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if(res.status === 200) console.log("Success");
        })
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
                <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} className="flex flex-col gap-[56px] justify-center items-center">

                    <input type="text" placeholder="ENTER YOUR NAME" className="input h-[48px]" style={{ background: "none" }} id="name" ref={nameRef} />
                    <input type="text" placeholder="ENTER YOUR EMAIL" className="input h-[48px]" style={{ background: "none" }} id="email" ref={emailRef} />
                    <input type="text" placeholder="PHONE NUMBER" className="input h-[48px]" style={{ background: "none" }} id="phone" ref={phoneRef} />
                    <textarea placeholder="YOUR MESSAGE" className="input h-[184px] text-start justify-start items-center" style={{ background: "none" }} id="message" ref={messageRef} />

                    <button type="submit" className="w-[177px] h-[40px] border-x-[4px] border-black uppercase text-[16px] font-bold tracking-[1.6px] lg:hover:w-[197px] transition-all duration-300 lg:cursor-pointer">
                        submit
                    </button>
                </form>
            </div>
        </section>
     );
}
 
export default ContactSection;