'use client'
import s from './HeroSection.module.css'
import {IconsData} from "@/config/data/icons";
import IconComponent from "@/components/icons/IconComponent/IconComponent";
import BtnOrder from "@/components/ui/BtnOrder/BtnOrder";
import {HeroSectionConfig} from "@/config/data/HeroSection";
import HeroItem from "@/components/layouts/HeroItem/HeroItem";
import StarIcon from "@/components/icons/StarIcon/StarIcon";
import {useEffect, useState} from "react";

export default function HeroSection() {


    const [width, setWidth] = useState<number>(0)
    const {src: HeroBgSrc, alt: HeroBgAlt} = IconsData.hero_bg;
    const {src: HeroIconSrc, alt: HeroIconAlt} = IconsData.hero_image;
    const {src: GarantSrc, alt: GarantAlt} = IconsData.garant;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        handleResize() // виставляємо ширину одразу після маунту

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <>
            <section className={s.hero_section}>
                <IconComponent src={HeroBgSrc} alt={HeroBgAlt} className={s.hero_bg}/>
                <div className={s.div}>


                    <div className={s.container}>
                        <div className={s.content}>
                            <h1>
                                {HeroSectionConfig.title}
                                <StarIcon className={s.star}/>
                            </h1>
                            <p>
                                {HeroSectionConfig.description}
                            </p>
                            <BtnOrder
                                textContent={width <= 1024 ? 'Безкоштовна консультація' : 'Отримати безкоштовну консультацію'}
                                className={s.btn_order}/>
                        </div>
                        <IconComponent src={HeroIconSrc} alt={HeroIconAlt} className={s.hero_icon}/>
                        <IconComponent src={GarantSrc} alt={GarantAlt} className={s.hero_icon_garant}/>
                    </div>
                </div>
                <div className={s.footer}>
                    {HeroSectionConfig.cards.map((card, index) => {
                        return (
                            <HeroItem key={index} title={card.title} icon={card.icon}/>
                        )
                    })}
                </div>
            </section>
        </>
    )
}