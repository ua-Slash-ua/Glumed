import {IconsData} from "@/config/data/icons";
import {videos} from "@/config/data/videos";

export const ReviewSectionConfig = {
    title: 'Що кажуть ті, хто вже спробував Glumed',
    items:
        [
            {
                name: 'Олена',
                age: '50 років',
                review: 'Після Глюмеда цукор знизився до 6,9, сон став кращим і ноги перестали крутити вночі',
                image: IconsData.olena,
                video: videos.reviews["1"]
            },
            {
                name: 'Матвій',
                age:
                    '46 років',
                review:
                    'Після Глюмеда цукор знизився до 6,9, сон став кращим і ноги перестали крутити вночі',
                image:
                IconsData.matviu,
                video: videos.reviews["2"]
            }
            ,
            {
                name: 'Сергій',
                age:
                    '52 роки',
                review:
                    'Після Глюмеда цукор знизився до 6,9, сон став кращим і ноги перестали крутити вночі',
                image:
                IconsData.sergey,
                video: videos.reviews["3"]
            }
            ,
            {
                name: 'Оксана',
                age:
                    '44 роки',
                review:
                    'Після Глюмеда цукор знизився до 6,9, сон став кращим і ноги перестали крутити вночі',
                image:
                IconsData.oksana,
                video: videos.reviews["4"]
            }
            ,
            {
                name: 'Марго',
                age:
                    '54 роки',
                review:
                    'Після Глюмеда цукор знизився до 6,9, сон став кращим і ноги перестали крутити вночі',
                image:
                IconsData.margo,
                video: videos.reviews["5"]
            }
            ,
        ]
}