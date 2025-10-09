import s from './IconBackground.module.css'

export default function IconBackground() {

    return (<>
        <div className={s.background}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="2858" viewBox="0 0 1920 2858"
                 fill="none">
                <g filter="url(#filter0_f_0_18)">
                    <path
                        d="M2270.11 978.983C2397.52 1643.62 1935.66 2290.76 1238.52 2424.4C541.38 2558.04 -165.142 2751.35 -292.552 2086.71C-419.962 1422.07 -51.8463 -80.8999 691.593 389.784C1388.73 256.144 2142.7 314.341 2270.11 978.983Z"
                        fill="white"/>
                </g>
                <defs>
                    <filter id="filter0_f_0_18" x="-617.429" y="0.0455017" width="3208.71" height="2857.45"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="150.023" result="effect1_foregroundBlur_0_18"/>
                    </filter>
                </defs>
            </svg>
        </div>
    </>)
}