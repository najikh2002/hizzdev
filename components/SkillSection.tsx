import { TitleSection } from "@/components";
import { skillsItems } from "@/constans";
import Image from "next/image";

const SkillSection = () => {
    return ( 
        <section className="w-full py-[15%] lg:py-[7%] flex justify-center" id="skills">
            <div className="flex flex-col justify-center w-full items-center gap-[50px] lg:gap-[79px]">
                <TitleSection title="skills" />
                <div className="flex flex-col gap-[55px]">
                    {skillsItems.map((item, index) => (
                        <div className="flex flex-col gap-[40px] text-center lg:text-start" key={index}>
                            <h2 className="uppercase text-[18px] font-bold tracking-[5px]">
                                {item.title}
                            </h2>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[50px]">
                            {item.logoBox.map((item, itemIndex) => (
                                <div className="flex flex-col items-center justify-center gap-[25px]" key={itemIndex}>
                                    <Image 
                                        src={item.logo}
                                        width={100}
                                        height={100}
                                        alt=""
                                        className="h-[70px] w-[70px] object-contain"
                                    />
                                    <p className="text-[15px] font-light tracking-[2px]">
                                        {item.logoTitle}
                                    </p>
                                </div>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default SkillSection;