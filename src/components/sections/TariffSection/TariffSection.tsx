import s from './TariffSection.module.css'
import {TariffSectionConfig} from "@/config/data/TariffSection";
import TariffItem from "@/components/layouts/TariffItem/TariffItem";

export default function TariffSection() {
    return (<>
        <section className={s.tariff_section}>
            <div className={s.title}>
                <h3>
                    {TariffSectionConfig.title}
                </h3>
            </div>
            <div className={s.container}>

                {

                    TariffSectionConfig.tariffs.map((item, index) => (
                        <TariffItem key={index} {...item}/>
                    ))
                }
            </div>
        </section>


    </>)
}
