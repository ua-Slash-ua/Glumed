import {iconItem} from "@/types/icon.type";

export type TariffType =
    {
        type:'base' | 'full'
        title: string,
        subtitle: string,
        items: string[],
        price_stock: string,
        price_sale: string,
        subprice: string,
        btn_order: string,
        btn_order_sale: string,
        icon: iconItem
    }

