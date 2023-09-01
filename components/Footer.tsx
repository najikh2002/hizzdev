import { footerSocialIcons } from "@/constans";
import Image from "next/image";

const Footer = () => {
    return ( 
        <footer className="w-full h-[286px] bg-black flex flex-col justify-end items-center gap-[44px] pb-[20px]">
            <a href="#home" className="w-[188px] flex flex-col justify-center items-center gap-[7px] lg:cursor-pointer group">
                <Image 
                    src="/top.svg"
                    width={15}
                    height={15}
                    alt=""
                    className="object-contain group-hover:translate-y-[-10px] transition-all duration-150"
                />
                <p className="text-[15px] uppercase font-bold tracking-[2.6px] text-white">back to top</p>
            </a>
            <div className="flex gap-[33px]">
                {footerSocialIcons.map((item, index) => (
                    <div key={index}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <Image 
                                src={item.icon}
                                width={30}
                                height={30}
                                alt=""
                                className="object-contain"
                            />
                        </a>
                    </div>
                ))}
            </div>
            <span className="text-white flex text-[9px] lg:text-[14px]">
                <b className="font-semibold tracking-[0.5px]">&copy;2023 Hizbullah Najihan</b><p className="font-light tracking-[0.9px]">&nbsp;All Rights Reservered.</p>
            </span>
        </footer>
     );
}
 
export default Footer;