import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection/AdvantagesSection";
import WhyGlumedSection from "@/components/sections/WhyGlumedSection/WhyGlumedSection";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <AdvantagesSection/>
            <WhyGlumedSection/>
        </>
    );
}
