import s from './Header.module.css'
import {MenuConfig} from "@/config/menu.config";
import MenuItem from "@/components/layouts/Header/MenuItem/MenuItem";
import BtnOrder from "@/components/ui/BtnOrder/BtnOrder";

export default function Header() {
    return (
        <>
            <header className={s.header}>
                <div className={s.r_side}>
                    <span>Glumed</span>
                </div>
                <div className={s.l_side}>
                    <nav>
                        <ul>
                            {
                                MenuConfig.map((item, index) => {
                                    return (
                                        <>
                                            <MenuItem key={index} name={item.name} path={item.path}/>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <BtnOrder textContent={"Замовити"}/>
                </div>
            </header>
        </>
    )
}