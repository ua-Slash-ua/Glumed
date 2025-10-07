import s from './AdvantageItem.module.css'
import {AdvantageItemProps} from "@/types/props/AdvantageItemProps";
import IconComponent from "@/components/icons/IconComponent/IconComponent";

export default function AdvantageItem({isMain,items,image,icon,title}:AdvantageItemProps) {
    return(
        <>
            <div className={`${s.item} ${isMain? s.item_left :''}`}>
                <div className={s.title}>
                    <IconComponent src={icon.src} alt={icon.alt} className={s.icon}/>
                    <span>{title}</span>
                </div>
                <ul>

                </ul>
                <IconComponent src={image.src} alt={image.alt} className={s.background_image}/>
                <div className={s.foreground}>

                </div>
            </div>
        </>
    )
}