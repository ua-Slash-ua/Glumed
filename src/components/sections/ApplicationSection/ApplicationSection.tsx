import s from './ApplicationSection.module.css'
import {ApplicationSectionConfig} from "@/config/data/ApplicationSection";
import {IconsData} from "@/config/data/icons";
import IconComponent from "@/components/icons/IconComponent/IconComponent";
import Application from "@/components/forms/Application/Application";

export default function ApplicationSection() {
    const {src: garantSrc, alt: garantAlt} = IconsData.garant;
    return (
        <>
            <section className={s.application_section} id={'application'}>
                <aside className={s.aside}>
                    <h3>{ApplicationSectionConfig.title}</h3>
                    <span>{ApplicationSectionConfig.subtitle}</span>
                    <ul>
                        {
                            ApplicationSectionConfig.steps.map((step, index) => (
                                <li key={index}>
                                    <div className={s.number}>
                                        0{index + 1}
                                    </div>
                                    <div className={s.content}>
                                        <span>{step.title}</span>
                                        <p>{step.description}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <IconComponent src={garantSrc} alt={garantAlt} className={s.garant}/>
                </aside>
                <div className={s.form}>
                    <Application/>
                </div>
            </section>
        </>
    )
}