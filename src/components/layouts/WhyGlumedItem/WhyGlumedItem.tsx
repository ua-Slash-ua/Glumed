import {WhyGlumedItemProps} from "@/types/props/WhyGlumedItemProps";
import s from './WhyGlumedItem.module.css'
import IconComponent from "@/components/icons/IconComponent/IconComponent";

export default function WhyGlumedItem({icon, title, description}: WhyGlumedItemProps){
    return (
        <>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.icon_container}>
                        <div className={s.icon_middle}>
                            <IconComponent src={icon.src} alt={icon.alt}/>
                        </div>
                    </div>

                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className={s.foreground}>

                </div>
            </div>
        </>
    )
}