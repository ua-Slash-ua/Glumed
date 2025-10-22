'use client'
import s from './ApplicationPopup.module.css'
import Application from "@/components/forms/Application/Application";
import {ApplicationPopupProps} from "@/types/props/ApplicationPopupProps";
import {useEffect} from "react";

export default function ApplicationPopup({active, onClose}: ApplicationPopupProps) {

    // блокування скролу при відкритті
    useEffect(() => {
        document.body.style.overflow = active ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [active]);

    if (!active) return null;

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className={s.background} onClick={handleBackgroundClick}>
            <div className={s.content}>
                <div className={s.btn_close} onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </div>
                <Application text={'Заповність форму нижче і отримайте безкоштовну консультацію'}/>
            </div>
        </div>
    );
}
