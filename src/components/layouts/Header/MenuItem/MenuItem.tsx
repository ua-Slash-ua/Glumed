import s from './MenuItem.module.css'
import Link from "next/link";
import {MenuItemType} from "@/types/menu.type";
import clsx from "clsx";

export default function MenuItem({name, path, className, onClick}: MenuItemType) {

    return (
        <>
            <Link href={path} className={clsx(s.item,className)} onClick={onClick}>
                <li>
                    {name}
                </li>
            </Link>
        </>
    )
}