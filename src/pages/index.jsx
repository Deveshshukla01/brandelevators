
import { FeatureToggles } from "@/components/feature-toggles/FeatureToggles";
import { Supports } from "@/components/supports/Supports";
import { Hero } from "@/components/hero/Hero";

import { ExpandableNavBar } from "@/components/navigation/ExpandableNavBar";
import { NAV_LINKS } from "@/components/navigation/constants";
import { Stats } from "@/components/stats/Stats";
import { BenefitsGrid } from "@/components/benefits-grid/BenefitsGrid";
import { font } from "@/fonts";
// import { BlogCarousel } from "@/components/blog/BlogCarousel";
import { FinalCTA } from "@/components/final-cta/FinalCTA";
import { Pricing } from "@/components/pricing/Pricing";
import { Footer } from "@/components/footer/Footer";
import Head from 'next/head';


export default function Home() {
  return (

    <>
     <Head>
        <title>Brand elevator digital</title>
        <meta name="description" content="Boost your online presence with our cutting-edge Digital Marketing platform 
        designed to enhance, manage, and optimize your web pages effortlessly. We specialize in SEO, content strategy,
         social media integration, and performance analytics to help businesses grow their digital footprint. Whether 
         you're launching a new website or improving an existing one, our tools and expert solutions ensure every
         page performs at its best — attracting more traffic, engaging visitors, and converting leads into customers." />
      </Head>

    
    <main className={`${font.className} overflow-hidden`}>
      <ExpandableNavBar links={NAV_LINKS}>
        <Hero />
      </ExpandableNavBar>
      {/* <Logos /> */}
      <div className="space-y-36 bg-[#FFF5DF] pb-24 pt-24 md:pt-32">
        <FeatureToggles />
        <Stats />
        <Supports />
        <BenefitsGrid />
        <Pricing />
        {/* <BlogCarousel /> */}
      </div>
      {/* <EmailCapture /> */}
      <FinalCTA />
      <Footer />
    </main>
    </>
  );
}
