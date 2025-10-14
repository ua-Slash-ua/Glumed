'use client'
import {motion} from "motion/react"
import s from './MenuPopup.module.css'
import {useEffect, useState} from "react";
import {mainConfig} from "@/config/main.config";
import {MenuConfig} from "@/config/menu.config";
import MenuItem from "@/components/layouts/Header/MenuItem/MenuItem";
import BtnOrder from "@/components/ui/BtnOrder/BtnOrder";

export default function MenuPopup({onClose}: { onClose: () => void, }) {
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <>
            {isOpen && (<div className={`${s.background} popup-open`}>
                <motion.div
                    className={s.popup}
                >
                    <div className={s.head}>
                        <span>
                            {mainConfig.title}
                        </span>
                        <div className={s.close} onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                                 fill="none">
                                <path
                                    d="M11.8808 14.4429L7.46408 10.0262L3.04738 14.4429L0.71565 12.1112L5.13236 7.69451L0.727987 3.29014L3.05971 0.958418L7.46408 5.36279L11.8561 0.970755L14.1878 3.30248L9.79581 7.69451L14.2125 12.1112L11.8808 14.4429Z"
                                    fill="url(#paint0_linear_120_3282)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_120_3282" x1="5.42396" y1="-5.4614" x2="-5.69817"
                                                    y2="7.91815" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3D93F7"/>
                                        <stop offset="1" stopColor="#4169F4"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className={s.content}>
                        <ul className={s.ul}>
                            {
                                MenuConfig.map((item, index) => {
                                    return (
                                        <MenuItem key={index} name={item.name} path={item.path} className={s.menuItem}
                                                  onClick={onClose}/>
                                    )
                                })
                            }
                        </ul>
                        <BtnOrder textContent={'Безкоштовна консультація'} className={s.btn_orders} onClick={onClose}/>
                        <ul className={s.con}>
                            {
                                mainConfig.contacts.map((contact, index) => {
                                    return (
                                        <li key={index}>
                                            {contact.type === 'phone' && (
                                                <a href={`tel:${contact.text}`}>
                                                    <div className={s.icon}
                                                         dangerouslySetInnerHTML={{__html: contact.icon}}/>
                                                    <p>{contact.text}</p>
                                                </a>
                                            )}

                                            {contact.type === 'email' && (
                                                <a href={`mailto:${contact.text}`}>
                                                    <div className={s.icon}
                                                         dangerouslySetInnerHTML={{__html: contact.icon}}/>
                                                    <p>{contact.text}</p>
                                                </a>
                                            )}

                                            {/*{contact.type === 'map' && (*/}
                                            {/*    <a className={s.last}*/}
                                            {/*       href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.text)}`}*/}
                                            {/*       target="_blank"*/}
                                            {/*       rel="noopener noreferrer"*/}
                                            {/*    >*/}
                                            {/*        <div className={s.icon} dangerouslySetInnerHTML={{ __html: contact.icon }} />*/}
                                            {/*        <p>{contact.text}</p>*/}
                                            {/*    </a>*/}
                                            {/*)}*/}
                                        </li>

                                    )
                                })
                            }
                        </ul>
                    </div>
                </motion.div>
            </div>)}
        </>
    )
}