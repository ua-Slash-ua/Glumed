import s from './AdvantagesSection.module.css'
import {AdvantagesSectionConfig} from "@/config/data/AdvantagesSection";
import BtnOrder from "@/components/ui/BtnOrder/BtnOrder";
import AdvantageItem from "@/components/layouts/AdvantageItem/AdvantageItem";

export default function AdvantagesSection() {

    return (
        <>
            <section className={s.advantage_section} id={'advantages'}>
                <div className={s.title}>
                    <p>{AdvantagesSectionConfig.description}</p>
                    <h3>
                        {AdvantagesSectionConfig.title}
                    </h3>
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

                </div>
                <BtnOrder textContent={'Дізнатися, чи підходить мені Glumed'} className={s.btn_order}/>
            </section>
        </>
    )
}