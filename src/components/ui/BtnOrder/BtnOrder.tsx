import s from './BtnOrder.module.css'
import {BtnOrderProps} from "@/types/props/BtnOrderProps";

export default function BtnOrder({textContent, className}: BtnOrderProps) {
    return (
        <>
            <div className={`${s.btn_order} ${className ?? ''}`}>
                <span>
                    {textContent}
                </span>
            </div>
        </>
    )
}