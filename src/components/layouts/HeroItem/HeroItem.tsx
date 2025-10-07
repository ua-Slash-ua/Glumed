import s from  './HeroItem.module.css'
import {iconItem} from "@/types/icon.type";
import IconComponent from "@/components/icons/IconComponent/IconComponent";
import {HeroItemProps} from "@/types/props/HeroItemProps";

export default function HeroItem({icon, title}: HeroItemProps) {
    return (
        <>
            <div className={s.container}>
                <div className={s.content}>
                    <IconComponent src={icon.src} alt={icon.alt}/>
                    <p>{title}</p>
                </div>
                <div className={s.foreground}>

                </div>
            </div>
        </>
    )
}