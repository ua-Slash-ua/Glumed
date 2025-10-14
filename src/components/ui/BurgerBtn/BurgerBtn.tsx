'use client'
import s from './BurgerBtn.module.css'
import {useState} from "react";
import MenuPopup from "@/components/popups/MenuPopup/MenuPopup";

export default function BurgerBtn() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className={s.burger_btn} onClick={() => {
            setIsOpen(!isOpen)
            setIsOpen(!isOpen)
        }}>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="2" rx="1" fill="white"/>
                <rect x="4" y="6" width="16" height="2" rx="1" fill="white"/>
                <rect y="12" width="20" height="2" rx="1" fill="white"/>
            </svg>

        </div>
            {
                isOpen && (
                    <MenuPopup onClose={() => setIsOpen(false)}/>
                )
            }
        </>
    )
}