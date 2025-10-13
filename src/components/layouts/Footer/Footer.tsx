import s from './Footer.module.css'
import {mainConfig} from "@/config/main.config";
import {MenuConfig} from "@/config/menu.config";
import BtnOrder from "@/components/ui/BtnOrder/BtnOrder";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.left}>
                    <div className={s.head}>
                        <span>{mainConfig.title}</span>
                        <p>
                            {mainConfig.subtitle}
                        </p>
                    </div>
                    <ul className={s.pages}>
                        {mainConfig.pages.map((page, index) => {
                            return (
                                <li key={index}>
                                    <a href={page.href}>{page.name}</a>

                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={s.menu}>
                    <h5>Меню</h5>
                    <ul className={s.menu}>
                        {MenuConfig.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.path}>{item.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={s.main}>
                    <BtnOrder textContent={'Замовити'} className={s.btn_order}/>
                    <ul>
                        {
                            mainConfig.contacts.map((contact, index) => {
                                return (
                                    <li key={index}>
                                        {contact.type === 'phone' && (
                                            <a href={`tel:${contact.text}`}>
                                                <div className={s.icon} dangerouslySetInnerHTML={{ __html: contact.icon }} />
                                                <p>{contact.text}</p>
                                            </a>
                                        )}

                                        {contact.type === 'email' && (
                                            <a href={`mailto:${contact.text}`}>
                                                <div className={s.icon} dangerouslySetInnerHTML={{ __html: contact.icon }} />
                                                <p>{contact.text}</p>
                                            </a>
                                        )}

                                        {contact.type === 'map' && (
                                            <a className={s.last}
                                                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.text)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className={s.icon} dangerouslySetInnerHTML={{ __html: contact.icon }} />
                                                <p>{contact.text}</p>
                                            </a>
                                        )}
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>
            </footer>
        </>
    )
}