'use client'
import s from './ReviewSection.module.css'
import './ReviewSection.css'
import type {Swiper as SwiperType} from 'swiper'
import {useEffect, useRef, useState} from "react";
import {ReviewSectionConfig} from "@/config/data/ReviewSection";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import IconComponent from "@/components/icons/IconComponent/IconComponent";
import StarIcon from "@/components/icons/StarIcon/StarIcon";

export default function ReviewSection() {
    const [width, setWidth] = useState<number>(0)

    const [activeSlide, setActiveSlide] = useState<number>(0);
    const countReview = ReviewSectionConfig.items.length;
    const nextRef = useRef<HTMLDivElement>(null);
    const prevRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<SwiperType | null>(null)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        handleResize() // виставляємо ширину одразу після маунту

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <>
            <section className={s.review_section} id={'reviews'}>
                <div className={s.title}>
                    <h3>
                        {ReviewSectionConfig.title}
                        <StarIcon/>
                    </h3>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={"auto"}
                    spaceBetween={width > 1024 ? 24 : 16}
                    pagination={{clickable: true}}
                    className={s.swiper}
                    onBeforeInit={swiper => {
                        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                            swiper.params.navigation.prevEl = prevRef.current
                            swiper.params.navigation.nextEl = nextRef.current
                        }
                    }}
                    onSwiper={swiper => {
                        swiperRef.current = swiper
                        // console.log('Swiper initialized:', {
                        //     activeIndex: swiper.activeIndex,
                        //     slides: swiper.slides.length,
                        //     params: swiper.params
                        // });
                    }}
                    onSlideChange={swiper => {
                        // console.log('Slide changed to:', swiper.activeIndex)
                        setActiveSlide(swiper.activeIndex)
                    }}
                >
                    {
                        ReviewSectionConfig.items.map((item, index) => (
                            <SwiperSlide key={index} className={s.swiper_slide}>
                                <IconComponent src={item.image.src} alt={item.image.alt} className={s.image}/>
                                <span>{item.name}</span>
                                <span>{item.age}</span>
                                <p>{item.review}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                {
                    width > 1024 ? (
                        <div className={s.navigation}>
                            <div
                                className={`${s.btn_prev} ${activeSlide <= 0 ? s.disabled_btn : ''}`}
                                ref={prevRef}
                                onClick={() => {
                                    // console.log('Prev button clicked')
                                    swiperRef.current?.slidePrev()
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none">
                                    <g clipPath="url(#clip0_0_419)">
                                        <path
                                            d="M10.0004 0.869629L11.6154 2.48459L5.24115 8.85875H19.1309V11.1414H5.24115L11.6154 17.5156L10.0004 19.1305L0.869989 10.0001L10.0004 0.869629Z"
                                            fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_419">
                                            <rect width="18.2609" height="18.2609" fill="white"
                                                  transform="matrix(-1 0 0 1 19.1309 0.869629)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <ul className={s.nav}>
                                {
                                    ReviewSectionConfig.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`${index <= activeSlide + 3 ? s.active_li : s.li}`}
                                            onClick={() => {
                                                if (index < 3) return;
                                                const targetSlide = index - 3;
                                                // console.log('Li clicked, going to slide:', targetSlide);
                                                swiperRef.current?.slideTo(targetSlide);
                                            }}
                                            style={{cursor: index > 2 ? 'pointer' : 'default'}}
                                        ></li>
                                    ))
                                }
                            </ul>
                            <div
                                className={`${s.btn_next} ${activeSlide >= countReview - 4 ? s.disabled_btn : ''}`}
                                ref={nextRef}
                                onClick={() => {
                                    // console.log('Next button clicked')
                                    swiperRef.current?.slideNext()
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none">
                                    <g clipPath="url(#clip0_0_425)">
                                        <path
                                            d="M9.9996 0.869629L8.38464 2.48459L14.7588 8.85875H0.869141V11.1414H14.7588L8.38464 17.5156L9.9996 19.1305L19.13 10.0001L9.9996 0.869629Z"
                                            fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_425">
                                            <rect width="18.2609" height="18.2609" fill="white"
                                                  transform="translate(0.869141 0.869629)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                    ) : (<>
                            <div className={s.nav_mobile}>
                                <div className={s.back_mobile}
                                     style={{width: `${(activeSlide + 1) / countReview * 100}%`}}>
                                </div>
                            </div>
                        </>
                    )
                }
            </section>
        </>
    )
}