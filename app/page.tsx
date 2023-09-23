import { AboutSection, ContactSection, Footer, HeroSection, Navbar, NavbarMobile, PortfolioSection, ShortDescSection, SkillSection } from '@/components';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar styles="z-50 fixed hidden lg:flex px-[5%] xl:px-[10%] z-10" />
      <NavbarMobile />
      <HeroSection />
      <ShortDescSection />
      <div className="about-bg">
        <AboutSection />
        <SkillSection />
      </div>
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
