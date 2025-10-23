'use client';
import s from './BtnOrder.module.css'
import { BtnOrderProps } from "@/types/props/BtnOrderProps";
import Link from "next/link";



export default function BtnOrder({ textContent, className, content, onClick, popUp = false }: BtnOrderProps) {
    const handleClick = () => {
        if (typeof fbq !== 'undefined') {
            fbq('track', 'InitiateCheckout');
        }
        if (onClick) onClick();
    };

    return (
        <>
            {popUp ? (
                <div
                    className={`${s.btn_order} ${className ?? ''}`}
                    onClick={handleClick}
                >
                    <span>{textContent}</span>
                    {content}
                </div>
            ) : (
                <Link
                    className={`${s.btn_order} ${className ?? ''}`}
                    href="/#application"
                    onClick={handleClick}
                >
                    <span>{textContent}</span>
                    {content}
                </Link>
            )}
        </>
    );
}