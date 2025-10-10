import {TariffType} from "@/types/props/tariffsProps";
import {IconsData} from "@/config/data/icons";

export const TariffSectionConfig: {
    title: string,
    tariffs: TariffType[]
} = {
    title: 'Обирайте Glumed для старту або стабільного результату',
    tariffs:
        [
            {
                type: 'base',
                title: 'Пробний набір — 10 капсул',
                subtitle: 'Ідеальний вибір для першого знайомства',
                items: [
                    'Достатньо для старту і тесту переносимості',
                    'Перші зміни — вже через 7 днів',
                ],
                price_stock: '300 грн',
                price_sale: '250 грн',
                subprice: '(всього 25 грн/день)',
                btn_order: 'Спробувати без ризику',
                btn_order_sale: 'Економія - 17%',
                icon: IconsData.pills
            },
            {
                type: 'full',
                title: 'Розширений набір — 30 капсул',
                subtitle: 'Розрахований на стабільний результат і глибоку дію.',
                items: [
                    'Допомагає стабілізувати та знизити стрибки цукру',
                    'Більше сил для щоденних справ',
                    'Спокій за здоров’я',
                ],
                price_stock: '900 грн',
                price_sale: '690 грн',
                subprice: '(всього 23 грн/день)',
                btn_order: 'Обрати стабільний результат',
                btn_order_sale: 'Економія - 23%',
                icon: IconsData.hero_image
            },
        ]
}