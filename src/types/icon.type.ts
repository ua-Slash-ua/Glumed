import {StaticImageData} from "next/image";

export type iconType = {
    [key: string]: iconItem ,
}

export type iconItem = {
    src: StaticImageData,
    alt: string,
}

export type ReviewIcons = {
    oksana: iconItem;
    margo: iconItem;
    matviu: iconItem;
    sergey: iconItem;
    olena: iconItem;
}