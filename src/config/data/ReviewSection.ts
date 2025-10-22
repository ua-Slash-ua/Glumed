import {IconsData} from "@/config/data/icons";
import {videos} from "@/config/data/videos";

export const ReviewSectionConfig = {
    title: 'Що кажуть ті, хто вже спробував Glumed',
    items:
        [
            {
                name: 'Олена',
                age: '63 роки',
                review: 'Діабет 15 років. Після Glumed цукор знизився з 25 до 9,5. Нарешті стабільний результат.',
                image: IconsData.olena,
                video: videos.reviews["1"]
            },
            {
                name: 'Петро',
                age:
                    '70 років',
                review:
                    'Діабет понад 20 років. Цукор впав із 10 до 6,5. Почувається чудово.',
                image:
                IconsData.matviu,
                video: videos.reviews["2"]
            }
            ,
            {
                name: 'Алла',
                age:
                    '65 років',
                review:
                    'З 2018 року мала нестабільний цукор. Після Glumed — 5,5 і гарне самопочуття.',
                image:
                IconsData.sergey,
                video: videos.reviews["3"]
            }
            ,
            {
                name: 'Олег',
                age:
                    '47 років',
                review:
                    'Через 10 днів прийому — цукор 5,7, енергія й легкість.',
                image:
                IconsData.oksana,
                video: videos.reviews["4"]
            }
            ,
            {
                name: 'Сергій',
                age:
                    '40 років',
                review:
                    'Діабет 3 роки. Glumed знизив цукор на 3–4 пункти. Результатом задоволений.',
                image:
                IconsData.margo,
                video: videos.reviews["5"]
            }
            ,
        ]
}