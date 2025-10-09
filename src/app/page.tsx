import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection/AdvantagesSection";
import WhyGlumedSection from "@/components/sections/WhyGlumedSection/WhyGlumedSection";
import ReviewSection from "@/components/sections/ReviewSection/ReviewSection";
import IconBackground from "@/components/icons/IconBackground/IconBackground";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <AdvantagesSection/>
            <WhyGlumedSection/>
            <ReviewSection/>


            <IconBackground/>
        </>
    );
}
