import s from './BtnOrder.module.css'
import {BtnOrderProps} from "@/types/props/BtnOrderProps";
import Link from "next/link";

export default function BtnOrder({textContent, className}: BtnOrderProps) {
    return (
        <>
            <Link className={`${s.btn_order} ${className ?? ''}`} href={"#application"}  >
                <span>
                    {textContent}
                </span>
            </Link>
        </>
    )
}