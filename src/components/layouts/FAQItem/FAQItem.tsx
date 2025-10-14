'use client'
import s from './FAQItem.module.css'
import {FAQItemProps} from "@/types/props/FAQItemProps";
import {useState} from "react";

export default function FAQItem({question, answer, index}: FAQItemProps) {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <li className={s.item}>
                <div className={s.con}>
                    <div className={s.number}>
                        <span>                        {index <= 9 ? `0${index + 1}` : index + 1}
</span>
                    </div>
                    <div className={s.content}>
                        <h5>{question}</h5>
                        <p className={`${s.answer} ${isActive ? s.active : ''}`}
                           dangerouslySetInnerHTML={{__html: parseBold(answer)}}/>

                    </div>
                </div>

                <div className={s.activate} onClick={() => setIsActive(!isActive)}>
                    {
                        isActive ?
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="3" viewBox="0 0 28 3"
                                     fill="none">
                                    <path d="M0 1.5H28" stroke="#151515" strokeWidth="3"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                     fill="none">
                                    <path d="M0 14H28M14 0L14 28" stroke="#151515" strokeWidth="3"/>
                                </svg>
                            )
                    }
                </div>
            </li>
        </>
    )
}


function parseBold(answer: string) {
    return answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}