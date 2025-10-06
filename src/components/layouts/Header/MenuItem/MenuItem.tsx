import s from './MenuItem.module.css'
import Link from "next/link";
import {MenuItemType} from "@/types/menu.type";

export default function MenuItem({name, path}: MenuItemType) {

    return (
        <>
            <Link href={path} className={s.item}>
                <li>
                    {name}
                </li>
            </Link>
        </>
    )
}