import s from './AdvantagesSection.module.css'
import {AdvantagesSectionConfig} from "@/config/data/AdvantagesSection";
import BtnOrder from "@/components/ui/BtnOrder/BtnOrder";
import AdvantageItem from "@/components/layouts/AdvantageItem/AdvantageItem";
import IconComponent from "@/components/icons/IconComponent/IconComponent";
import {IconsData} from "@/config/data/icons";

export default function AdvantagesSection() {
    const {src: circleSrc, alt: circleAlt} = IconsData.circle_01;
    const {src: spotSrc, alt: spotAlt} = IconsData.spot;
    return (
        <>
            <section className={s.advantage_section} id={'advantages'}>
                <div className={s.title}>
                    <p>{AdvantagesSectionConfig.description}</p>
                    <h3>
                        {AdvantagesSectionConfig.title}
                    </h3>


                </div>
                <div className={s.container}>
                    <AdvantageItem
                        isMain={true}
                        title={AdvantagesSectionConfig.withoutGlumed.title}
                        icon={AdvantagesSectionConfig.withoutGlumed.icon}
                        image={AdvantagesSectionConfig.withoutGlumed.image}
                        items={AdvantagesSectionConfig.withoutGlumed.items}/>
                    <AdvantageItem
                        isMain={false}
                        title={AdvantagesSectionConfig.withGlumed.title}
                        icon={AdvantagesSectionConfig.withGlumed.icon}
                        image={AdvantagesSectionConfig.withGlumed.image}
                        items={AdvantagesSectionConfig.withGlumed.items}/>
                </div>
                <BtnOrder textContent={'Дізнатися, чи підходить мені Glumed'} className={s.btn_order}/>
                <IconComponent src={circleSrc} alt={circleAlt} className={s.circle}/>
                <IconComponent src={spotSrc} alt={spotAlt} className={s.spot}/>

            </section>
        </>
    )
}