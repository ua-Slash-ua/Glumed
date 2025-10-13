import s from './CertificatesSection.module.css'
import IconComponent from "@/components/icons/IconComponent/IconComponent";
import {CertificatesSectionConfig} from "@/config/data/CertificatesSection";

export default function CertificatesSection() {
    const {src: previewSrc, alt: previewAlt} = CertificatesSectionConfig.preview;
    return (
        <>
            <section className={s.certificates_section} id={'certificates'}>
                <aside className={s.aside}>
                    <h3>
                        {CertificatesSectionConfig.sub_title}
                    </h3>
                    <IconComponent src={previewSrc} alt={previewAlt} className={s.preview}/>
                </aside>
                <div className={s.main}>
                    <h3>
                        {CertificatesSectionConfig.title}
                    </h3>
                    <ul>
                        {CertificatesSectionConfig.items.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className={s.plus}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11"
                                             viewBox="0 0 11 11" fill="none">
                                            <path
                                                d="M10.1435 4.62645H6.76457V1.24756C6.76457 0.874525 6.46182 0.571777 6.08879 0.571777H5.63829C5.26526 0.571777 4.96251 0.874525 4.96251 1.24756V4.62645H1.58362C1.21058 4.62645 0.907837 4.9292 0.907837 5.30223V5.75273C0.907837 6.12576 1.21058 6.42851 1.58362 6.42851H4.96251V9.8074C4.96251 10.1804 5.26526 10.4832 5.63829 10.4832H6.08879C6.46182 10.4832 6.76457 10.1804 6.76457 9.8074V6.42851H10.1435C10.5165 6.42851 10.8192 6.12576 10.8192 5.75273V5.30223C10.8192 4.9292 10.5165 4.62645 10.1435 4.62645Z"
                                                fill="black"/>
                                        </svg>
                                    </div>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                    <div className={s.certificates}>
                        {CertificatesSectionConfig.certificates.map((certificate, index) => {
                            return (
                                <IconComponent {...certificate} key={index} className={s.certificate_image}/>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}