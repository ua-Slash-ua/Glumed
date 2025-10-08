import s from './AdvantageLineItem.module.css'

export default function AdvantageLineItem({status = false, text}: { status?: boolean, text: string }) {
    return (
        <>
            <li className={`${s.item} ${status? s.right :''}`}>
                {!status &&(
                    <div className={s.circle_container}>
                        <div className={s.circle_middle}>
                            <div className={s.circle_main}>

                            </div>
                        </div>
                    </div>
                )}

                <p>
                    {text}
                </p>

                {status &&(
                    <div className={s.circle_container}>
                        <div className={s.circle_middle}>
                            <div className={s.circle_main}>

                            </div>
                        </div>
                    </div>
                )}
            </li>
        </>
    )
}
