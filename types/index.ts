import { Dispatch, SetStateAction } from "react";

export interface SocialIcon {
    name: string;
    icon: JSX.Element; 
    size: number;
    url: string;
    color?: string;
}

export interface AboutItems {
    icon: string;
    title: string;
    subTitle: string;
}

interface SubSkillsItems {
    logo: string;
    logoTitle: string;
}

export interface SkillsItems {
    title: string;
    logoBox: SubSkillsItems[];
}

export interface SubPortfolioItems {
    id: number;
    category: string;
    title: string;
    subTitle: string;
    url: string;
    img: string;
    show?: number;
    setShow?: any;
    key?: number;
}

export interface PortfolioItems {
    platform: string;
    work: SubPortfolioItems[];
}

export interface FooterSocialIcons {
    icon: string;
    url: string;
}

export interface InitValues {
    name: string;
    email: string;
    phone: string;
    message: string;
}