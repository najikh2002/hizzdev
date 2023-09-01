import { AboutItems, FooterSocialIcons, PortfolioItems, SkillsItems } from "@/types";
import { socialIcons, socialIconsMobile } from "./social";

export const aboutItems: AboutItems[] = [
    {
        icon: "/about1.svg",
        title: "design",
        subTitle: "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job."
    },
    {
        icon: "/about2.svg",
        title: "development",
        subTitle: "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job."
    },
    {
        icon: "/about3.svg",
        title: "maintenance",
        subTitle: "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job."
    },
]

export const skillsItems: SkillsItems[] = [
    {
        title: "using now:",
        logoBox: [
            {
                logo: "/skill-use1.svg",
                logoTitle: "HTML5",
            },
            {
                logo: "/skill-use2.svg",
                logoTitle: "CSS3",
            },
            {
                logo: "/skill-use3.svg",
                logoTitle: "JAVASCRIPT",
            },
            {
                logo: "/skill-use4.svg",
                logoTitle: "REACTJS",
            },
            {
                logo: "/skill-use5.svg",
                logoTitle: "TYPESCRIPT",
            },
            {
                logo: "/skill-use6.svg",
                logoTitle: "TAILWINDCSS",
            },
            {
                logo: "/skill-use7.svg",
                logoTitle: "NEXTJS",
            },
            {
                logo: "/skill-use8.svg",
                logoTitle: "FIGMA",
            },
        ],
    },
    {
        title: "learning:",
        logoBox: [
            {
                logo: "/skill-learn1.svg",
                logoTitle: "NODEJS",
            },
            {
                logo: "/skill-learn2.svg",
                logoTitle: "MySQL",
            },
            {
                logo: "/skill-learn3.svg",
                logoTitle: "MONGODB",
            },
        ],
    },
    {
        title: "other skills:",
        logoBox: [
            {
                logo: "/skill-other1.svg",
                logoTitle: "JAVA",
            },
            {
                logo: "/skill-other2.svg",
                logoTitle: "PYTHON",
            },
            {
                logo: "/skill-other3.svg",
                logoTitle: "PHP",
            },
            {
                logo: "/skill-other4.svg",
                logoTitle: "C",
            },
        ],
    },
]

export const portfolioItems: PortfolioItems[] = [
    {
        platform: "all",
        work: [
            {
                id: 1,
                category: "website",
                title: "ChatFlow",
                subTitle: "Landing page in React.js (Framer-Motion Library)",
                url: "https://chatflow-rho.vercel.app",
                img: "/project-1.jpg"
            },
            {
                id: 2,
                category: "website",
                title: "Parallax Gallery",
                subTitle: "Restaurant browsing in HTML, CSS and JavaScript (Using Yelp jQuery & GSAP)",
                url: "https://najikh2002.github.io/gallery-parallax/",
                img: "/project-2.jpg"
            },
            {
                id: 3,
                category: "mobile",
                title: "e-Tasbih",
                subTitle: "Tasbeeh mobile-app in React Native (Use Expo)",
                url: "https://play.google.com/store/apps/details?id=com.najikh2002.eTasbih&hl=en-ID",
                img: "/project-4.jpg"
            },
        ],
    },
    {
        platform: "website",
        work: [
            {
                id: 4,
                category: "website",
                title: "ChatFlow",
                subTitle: "Landing page in React.js (Framer-Motion Library)",
                url: "https://chatflow-rho.vercel.app",
                img: "/project-1.jpg"
            },
            {
                id: 5,
                category: "website",
                title: "Parallax Gallery",
                subTitle: "Restaurant browsing in HTML, CSS and JavaScript (Using Yelp jQuery & GSAP)",
                url: "https://najikh2002.github.io/gallery-parallax/",
                img: "/project-2.jpg"
            },
            {
                id: 6,
                category: "website",
                title: "Metaverse Madness",
                subTitle: "Landing page in React.js (Framer-Motion Library)",
                url: "https://metaversus-flame-eight.vercel.app/",
                img: "/project-3.jpg"
            },
            
        ],
    },
    {
        platform: "mobile",
        work: [
            {
                id: 7,
                category: "mobile",
                title: "e-Tasbih",
                subTitle: "Tasbeeh mobile-app in React Native (Use Expo)",
                url: "https://play.google.com/store/apps/details?id=com.najikh2002.eTasbih&hl=en-ID",
                img: "/project-4.jpg"
            },
        ],
    },
]

export const footerSocialIcons: FooterSocialIcons[] = [
    {
        icon: "/ficon-1.svg",
        url: "https://www.facebook.com/hisbullah.najihan",
    },
    {
        icon: "/ficon-2.svg",
        url: "https://www.linkedin.com/in/hizbullah-najihan-40037124b/",
    },
    {
        icon: "/ficon-3.svg",
        url: "https://www.instagram.com/hizz.nn/",
    },
    {
        icon: "/ficon-4.svg",
        url: "mailto:hizbullahnajihan@gmail.com",
    },
]

export {
    socialIcons,
    socialIconsMobile
}