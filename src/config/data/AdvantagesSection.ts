import {IconsData} from "@/config/data/icons";

export const AdvantagesSectionConfig = {
    title: 'Glumed допомагає\n повернути контроль',
    description: 'З діабетом кожен день\n здається боротьбою',
    withGlumed: {
        title: 'З Glumed',
        icon: IconsData.check_mark,
        image: IconsData.men_with_glumed,
        image_mobile: IconsData.men_with_glumed_mobile,
        items: [
            'Стабільний цукор після їжі й протягом дня',
            'Енергія для прогулянок і щоденних справ',
            'Спокійний сон і легкість у тілі',
            'Поліпшення зору та чутливості кінцівок',
            'Нормалізація апетиту й ваги',
            'Впевненість у здоров’ї та завтрашньому дні',
        ]
    },
    withoutGlumed: {
        title: 'Без Glumed',
        icon: IconsData.dagger,
        image: IconsData.men_without_glumed,
        image_mobile: IconsData.men_without_glumed_mobile,
        items: [
            'Нестабільний цукор, різкі стрибки після їжі',
            'Постійна втома та слабкість',
            'Неспокійний сон, нічні походи в туалет',
            'Оніміння кінцівок, проблеми із зором',
            'Тяга до солодкого, зайва вага',
            'Тривога та страх за здоров’я',

        ],
    }
}