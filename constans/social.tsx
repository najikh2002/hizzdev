import { SocialIcon } from "@/types";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";


export const socialIcons: SocialIcon[] = [
    { name: "Instagram", icon: <FaInstagram />, size: 35 , url: "https://www.instagram.com/hizz.nn/"  },
    { name: "LinkedIn", icon: <FaLinkedin />, size: 35 , url: "https://www.linkedin.com/in/hizbullah-najihan-40037124b/"  },
    { name: "GitHub", icon: <FaGithub />, size: 35 , url: "https://github.com/najikh2002"  },
];
  
export const socialIconsMobile: SocialIcon[] = [
      { name: "Instagram", icon: <FaInstagram />, color: "white", size: 30 , url: "https://www.instagram.com/hizz.nn/"  },
      { name: "LinkedIn", icon: <FaLinkedin />, color: "white", size: 30 , url: "https://www.linkedin.com/in/hizbullah-najihan-40037124b/"  },
      { name: "GitHub", icon: <FaGithub />, color: "white", size: 30 , url: "https://github.com/najikh2002"  },
];