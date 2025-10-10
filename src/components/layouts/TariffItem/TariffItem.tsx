import s from './TariffItem.module.css'
import {TariffType} from "@/types/props/tariffsProps";
import BtnOrder from "@/components/ui/BtnOrder/BtnOrder";
import IconComponent from "@/components/icons/IconComponent/IconComponent";
import {IconsData} from "@/config/data/icons";

export default function TariffItem({
                                       items,
                                       icon,
                                       type,
                                       btn_order_sale,
                                       btn_order,
                                       subtitle,
                                       price_sale,
                                       price_stock,
                                       title,
                                       subprice
                                   }: TariffType) {
    const {src: garantSrc, alt: garantAlt} = IconsData.garant;
    return (
        <>
            <div className={`${s.item} ${type === 'full' ? s.full : ''}`}>
                <div className={s.container}>


                    <div className={s.item_text}>
                        <h3>
                            {title}
                        </h3>
                        <h4>
                            {subtitle}
                        </h4>
                        <ul>
                            {
                                items.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <div className={s.icon}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 18 18" fill="none">
                                                    <path
                                                        d="M17.5629 7.93941L16.3353 6.71197C16.0439 6.4206 15.8051 5.84481 15.8051 5.43189V3.69599C15.8051 2.87022 15.1305 2.19564 14.305 2.1952H12.5684C12.156 2.1952 11.5795 1.956 11.2881 1.66485L10.0607 0.437414C9.47744 -0.145805 8.52251 -0.145805 7.9393 0.437414L6.71186 1.66573C6.42023 1.9571 5.84312 2.19564 5.43156 2.19564H3.69566C2.87099 2.19564 2.19553 2.87022 2.19553 3.69599V5.43193C2.19553 5.84323 1.95681 6.42082 1.6654 6.71201L0.437744 7.93945C-0.145915 8.52267 -0.145915 9.47759 0.437744 10.0617L1.6654 11.2892C1.95699 11.5805 2.19553 12.1579 2.19553 12.5693V14.3052C2.19553 15.1301 2.87099 15.8055 3.69566 15.8055H5.4316C5.84404 15.8055 6.42049 16.0443 6.7119 16.3355L7.93934 17.5633C8.52256 18.1461 9.47748 18.1461 10.0607 17.5633L11.2881 16.3355C11.5798 16.0441 12.156 15.8055 12.5684 15.8055H14.305C15.1306 15.8055 15.8052 15.1301 15.8052 14.3052V12.5693C15.8052 12.1562 16.0441 11.5804 16.3353 11.2892L17.563 10.0617C18.1457 9.47759 18.1457 8.52262 17.5629 7.93941ZM7.80926 12.3754L4.49962 9.06537L5.56032 8.00489L7.80952 10.2541L12.4395 5.62521L13.4999 6.68569L7.80926 12.3754Z"
                                                        fill="white"/>
                                                </svg>
                                            </div>
                                            <p>{item}</p>

                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={s.item_text}>
                        <div className={s.prices_container}>
                            <div className={s.fire}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"
                                     fill="none">
                                    <circle cx="27.5503" cy="27.5503" r="27.2407" stroke="white"
                                            stroke-width="0.619108"/>
                                    <path
                                        d="M30.2919 32.6704C30.0302 32.6704 29.7685 32.9133 29.7685 33.7271C29.7685 34.5409 30.0302 34.7838 30.2919 34.7838C30.5536 34.7838 30.8153 34.5409 30.8153 33.7271C30.8153 32.9133 30.5536 32.6704 30.2919 32.6704Z"
                                        fill="white"/>
                                    <path
                                        d="M24.1897 28.6623C23.928 28.6623 23.6663 28.9052 23.6663 29.719C23.6663 30.5327 23.928 30.7757 24.1897 30.7757C24.4514 30.7757 24.713 30.5327 24.713 29.719C24.713 28.9052 24.4514 28.6623 24.1897 28.6623Z"
                                        fill="white"/>
                                    <path
                                        d="M36.2954 22.9648C33.6735 20.008 32.1154 17.4052 31.2699 15.7423C30.3542 13.9412 30.0542 12.8243 30.0519 12.8154L29.7793 11.7632L28.8058 12.2065C28.692 12.2583 26.0024 13.5108 24.4953 16.5884C23.7388 18.1333 23.5875 19.8535 23.5938 21.0244C23.5975 21.7058 23.1247 22.2975 22.4696 22.4313C22.0103 22.525 21.5378 22.3792 21.2063 22.0407L19.393 20.1892L18.7692 21.0674C18.7044 21.1586 17.18 23.3053 16.9025 23.7342C15.5473 25.8289 14.8406 28.269 14.8589 30.7907C14.8835 34.1587 16.1806 37.314 18.5114 39.6757C20.842 42.0372 23.9422 43.3377 27.2408 43.3377C34.0683 43.3376 39.6229 37.666 39.6229 30.6947C39.6229 28.167 38.4101 25.3496 36.2954 22.9648ZM30.2919 36.0955C29.031 36.0955 28.0794 35.2453 28.0794 33.7271C28.0794 32.221 29.031 31.3586 30.2919 31.3586C31.5528 31.3586 32.5044 32.221 32.5044 33.7271C32.5044 35.2453 31.5528 36.0955 30.2919 36.0955ZM29.0786 27.472H31.0889L25.403 35.974H23.3927L29.0786 27.472ZM21.9772 29.719C21.9772 28.2129 22.9288 27.3506 24.1897 27.3506C25.4507 27.3506 26.4023 28.2129 26.4023 29.719C26.4023 31.2372 25.4507 32.0874 24.1897 32.0874C22.9288 32.0874 21.9772 31.2372 21.9772 29.719Z"
                                        fill="white"/>
                                </svg>
                            </div>
                            <div className={s.prices}>
                                {price_stock && (<span className={s.price_stock}>{price_stock}</span>)}
                                {price_sale && (<span className={s.price_sale}>{price_sale}</span>)}
                                {subprice && (<span className={s.subprice}>{subprice}</span>)}
                            </div>
                            <IconComponent src={icon.src} alt={icon.alt} className={s.image}/>
                        </div>
                        <BtnOrder textContent={btn_order} className={s.btn_order}/>
                    </div>


                </div>
            </div>
            {
                type === 'full' ? (
                    <IconComponent src={garantSrc} alt={garantAlt} className={s.garant}/>
                ) : ''
            }
        </>
    )
}