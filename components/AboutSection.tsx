import { TitleSection } from "@/components";
import { aboutItems } from "@/constans";
import Image from "next/image";

const AboutSection = () => {
    return ( 
        <section className="w-full py-[15%] lg:py-[7%] flex justify-center overflow-hidden" id="about">
           <div className="flex flex-col justify-center items-center gap-[50px] lg:gap-[74px] px-[5%] lg:px-[20%]">
                <TitleSection title="about me" />
                <p className="text-center px-2 lg:px-[10%] text-black/50">
                I am an enthusiastic and dedicated Web Developer looking to build my career in the Frontend development industry. I have 2 year of experience in Frontend Development. I have good problem-solving skills and can quickly adapt to new technologies. Additionally, I have strong communication and teamwork skills, and I am always ready to learn and improve my skills to achieve the company's goals.
                </p> 
                <span className="uppercase text-[15px] text-black font-semibold w-[139px] h-[25px] text-center border-x-[2.5px] border-black lg:hover:w-[147px] transition-all duration-300">
                    explore
                </span>
                <Image 
                    src={"decoration.svg"}
                    width={170}
                    height={12}
                    alt=""
                    className="object-contain"
                />
                <div className="grid grid-cols-2 gap-[5%] lg:gap-[67px] pb-[10%] px-[25%] lg:px-0">
                    {aboutItems.map((item, index) => (
                        <div key={index} className={`flex flex-col justify-center col-span-2 ${index == 2 ? "lg:col-span-2 lg:px-[23%]" : "lg:col-span-1"}`}>
                            <div className="flex items-center">
                                <Image 
                                    src={item.icon}
                                    width={61}
                                    height={64}
                                    alt=""
                                    className="object-contain translate-x-[-35px]"
                                />
                                <h3 className="translate-x-[-63.5px] text-[22px] uppercase font-bold tracking-[4px] text-black">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-[14px] font-light text-black/50">{item.subTitle}</p>
                        </div>
                    ))}
                </div>
                <Image 
                    src={"decoration.svg"}
                    width={170}
                    height={12}
                    alt=""
                    className="object-contain"
                />
           </div>
        </section>
     );
}
 
export default AboutSection;