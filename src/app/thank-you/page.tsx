import IconComponent from "@/components/icons/IconComponent/IconComponent";
import {IconsData} from "@/config/data/icons";
import s from './ThankYou.module.css'
import {ThankYouPage} from "@/config/data/ThankYouPage";
import Link from "next/link";

export default function ThankYou() {
    return (
        <>
            <section className={s.section} style={{backgroundImage: `url(${IconsData.hero_bg.src.src})`}}>
                <div className={s.content}>
                    <h2 className={s.title}>
                        {ThankYouPage.title}
                    </h2>
                    <p className={s.description}>{ThankYouPage.description}</p>
                    <Link className={s.btn_send} href={'/'}>
                        {ThankYouPage.btn_send}
                    </Link>
                </div>
                {/*<IconComponent  {...IconsData.hero_bg} className={s.background_image}/>*/}
            </section>
        </>
    )
}