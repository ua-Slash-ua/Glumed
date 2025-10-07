import s from './IconComponent.module.css'
import {iconItem} from "@/types/icon.type";
import Image from "next/image";


type Props = iconItem & { className?: string }

export default function IconComponent({src, alt, className}: Props) {
    return (
        <>
            <div className={`${s.icon_container} ${className ?? ''}`}>
                <Image src={src} alt={alt}/>
            </div>
        </>
    )
}