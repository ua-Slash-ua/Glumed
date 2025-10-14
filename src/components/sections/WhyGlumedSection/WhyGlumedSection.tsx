import s from './WhyGlumedSection.module.css'
import {WhyGlumedSectionConfig} from "@/config/data/WhyGlumedSection";
import BtnOrder from "@/components/ui/BtnOrder/BtnOrder";
import IconComponent from "@/components/icons/IconComponent/IconComponent";
import {IconsData} from "@/config/data/icons";
import HeroItem from "@/components/layouts/HeroItem/HeroItem";
import WhyGlumedItem from "@/components/layouts/WhyGlumedItem/WhyGlumedItem";
import StarIcon from "@/components/icons/StarIcon/StarIcon";

export default function WhyGlumedSection() {
    const {src: grilleSrc, alt: grilleAlt} = IconsData.why_glumed_grille;
    const {src: tabletsSrc, alt: tabletsAlt} = IconsData.tablets;
    const data = WhyGlumedSectionConfig;
    return (
        <>
            <section className={s.why_glumed_section} id={'whyglumed'}>
                <h3 className={s.title}>
                    {data.title}
                    <StarIcon className={s.star}/>
                </h3>
                <div className={s.container}>
                    <div className={s.column}>
                        {
                            data.items.map((item, index) => {
                                return (
                                    (index + 1) % 2 !== 0 &&
                                    <WhyGlumedItem key={index} icon={item.icon} title={item.title} description={item.description} />
                                )
                            })
                        }
                    </div>
                    <IconComponent src={tabletsSrc} alt={tabletsAlt} className={s.main_icon}/>
                    <div className={s.column}>
                        {
                            data.items.map((item, index) => {
                                return (
                                    (index + 1) % 2 == 0 &&
                                    <WhyGlumedItem key={index} icon={item.icon} title={item.title} description={item.description} />
                                )
                            })
                        }
                    </div>

                </div>
                <BtnOrder textContent={data.btn_order} className={s.btn_order}/>

                <IconComponent src={grilleSrc} alt={grilleAlt} className={s.background_image}/>
            </section>
        </>
    )
}