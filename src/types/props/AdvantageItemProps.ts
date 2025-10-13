import {iconItem} from "@/types/icon.type";

export type AdvantageItemProps = {
    isMain: boolean,
    title: string,
    icon: iconItem,
    image: iconItem,
    items: string[],
    className?: string,
    isMobile?: boolean,
}