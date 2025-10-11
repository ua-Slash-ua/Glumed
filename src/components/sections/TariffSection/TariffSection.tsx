'use client'
import s from './TariffSection.module.css'
import {TariffSectionConfig} from "@/config/data/TariffSection";
import TariffItem from "@/components/layouts/TariffItem/TariffItem";
import {IconsData} from "@/config/data/icons";
import IconComponent from "@/components/icons/IconComponent/IconComponent";
import clsx from "clsx";
import {useEffect, useState} from "react";
const DEADLINE = new Date("2025-10-15T00:00:00"); // приклад дати завершення
export default function TariffSection() {
    const {src: tablet02Src, alt: tablet02Alt} = IconsData.tablets_02;

    const [time, setTime] = useState<number[] >([0,0,0,0,0,0]);

    useEffect(() => {
        const update = () => setTime(getTimeRemaining(DEADLINE));
        update(); // одразу ініціалізуємо
        const timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    }, []);

    return (<>
        <section className={s.tariff_section}>
            <div className={s.title}>
                <h3>
                    {TariffSectionConfig.title}
                </h3>
            </div>
            <div className={s.container}>

                {

                    TariffSectionConfig.tariffs.map((item, index) => (
                        <TariffItem key={index} {...item}/>
                    ))
                }
            </div>
            <div className={s.sales}>
                <div className={s.sub_title}>
                    <h4>Сьогодні Glumed обрали вже 27 людей</h4>
                </div>
                <div className={s.title}>
                    <h3>Акційна ціна від виробника діє ще:</h3>
                </div>
                <div className={s.time_container}>
                    <div className={s.time_item}>
                        <div className={s.time_value}>
                            <span>{time[0]}</span>
                            <span>{time[1]}</span>
                        </div>
                        <div className={s.time_name}>годин</div>
                    </div>
                    <div className={s.time_item}>
                        <div className={s.time_value}>
                            <span>{time[2]}</span>
                            <span>{time[3]}</span>
                        </div>
                        <div className={s.time_name}>хвилин</div>
                    </div>
                    <div className={s.time_item}>
                        <div className={s.time_value}>
                            <span>{time[4]}</span>
                            <span>{time[5]}</span>
                        </div>
                        <div className={s.time_name}>секунд</div>
                    </div>
                </div>
                <div className={s.description}>
                    <div className={s.desc_item}>
                        <div className={s.desc_icon}>
                            <svg width="942" height="942" viewBox="0 0 942 942" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="470.541" width="665.44" height="665.445" rx="15" transform="rotate(45 470.541 0)" fill="white"/>
                                <rect x="566" y="204" width="186" height="534" rx="5" fill="#6E6E6E"/>
                                <rect x="218" y="564" width="186" height="534" transform="rotate(-90 218 564)" fill="#6E6E6E"/>
                                <rect x="189" y="204" width="186" height="534" rx="5" fill="#6E6E6E"/>
                            </svg>

                        </div>
                        <p>
                            Доставка Новою поштою
                        </p>
                    </div>
                    <div className={s.desc_item}>
                        <div className={s.desc_icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="34" viewBox="0 0 30 34"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M30 27.6745H22.6908C20.3538 27.6745 18.46 25.7278 18.46 23.3257V20.163C18.46 17.7609 20.3538 15.8142 22.6908 15.8142H30V13.8375C30 12.6847 29.5538 11.5777 28.7615 10.7617C27.9677 9.94733 26.8908 9.48873 25.7692 9.48873C20.4415 9.48873 9.55846 9.48873 4.23077 9.48873C3.10923 9.48873 2.03231 9.94733 1.23846 10.7617C0.446154 11.5777 0 12.6847 0 13.8375V29.6512C0 30.804 0.446154 31.911 1.23846 32.727C2.03231 33.5414 3.10923 34 4.23077 34H25.7692C26.8908 34 27.9677 33.5414 28.7615 32.727C29.5538 31.911 30 30.804 30 29.6512V27.6745ZM30 18.1863V25.3025H22.6908C21.6292 25.3025 20.7677 24.4169 20.7677 23.3257V20.163C20.7677 19.0718 21.6292 18.1863 22.6908 18.1863H30ZM23.4615 20.163C24.3108 20.163 25 20.8715 25 21.7444C25 22.6173 24.3108 23.3257 23.4615 23.3257C22.6123 23.3257 21.9231 22.6173 21.9231 21.7444C21.9231 20.8715 22.6123 20.163 23.4615 20.163Z"
                                      fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M21.2892 7.90736H25.7692C26.0631 7.90736 26.3554 7.93108 26.6431 7.97536L27.3723 6.36552C27.6415 5.77251 27.3923 5.06722 26.8154 4.79048L17.0538 0.111196C16.4769 -0.165544 15.7908 0.0922197 15.5215 0.685234L14.6954 2.50539L19.7723 4.93754C20.8954 5.47679 21.4877 6.71026 21.2892 7.90736Z"
                                      fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5.26923 7.90736H19.6985C19.9385 7.32225 19.6877 6.64226 19.1231 6.37185L9.36154 1.69257C8.78462 1.41583 8.09846 1.67359 7.82923 2.26661L5.26923 7.90736Z"
                                      fill="white"/>
                            </svg>
                        </div>
                        <p>
                            Оплата при отриманні
                        </p>
                    </div>
                </div>
                <IconComponent key={1} src={tablet02Src} alt={tablet02Alt} className={clsx(s.sales_icon, s.first)}/>
                <IconComponent key={2} src={tablet02Src} alt={tablet02Alt} className={clsx(s.sales_icon, s.second)}/>
            </div>
        </section>


    </>)
}

function getTimeRemaining(endTime: Date): number[] {
    const total = endTime.getTime() - new Date().getTime();

    const totalSeconds = Math.max(0, Math.floor(total / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [
        Math.floor(hours / 10), hours % 10,
        Math.floor(minutes / 10), minutes % 10,
        Math.floor(seconds / 10), seconds % 10,
    ];
}

