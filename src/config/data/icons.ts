import {iconType} from "@/types/icon.type";

import HeroBg from "@/public/hero-bg.png";
import Garant from "@/public/garant.png";
import HeroImage from "@/public/hero-image.png";

import iconClock from "@/public/icons/clock.png";
import iconLeaf from "@/public/icons/leaf.png";
import iconArrows from "@/public/icons/arrows.png";

import menWithGlumed from "@/public/men-with-glumed.png";
import menWithOutGlumed from "@/public/men-without-glumed.png";

import dagger from "@/public/icons/dagger.png";
import checkMark from "@/public/icons/check-mark.png";

import circle_01 from "@/public/icons/circle_01.svg";
import spot from "@/public/icons/spot.png";

import calendar from "@/public/icons/calendar.png";
import react from "@/public/icons/react.png";
import okHand from "@/public/icons/ok_hand.png";

import whyGlumedGrille from "@/public/why-glumed-grille.png";

import tablets from "@/public/tablets.png";


export const IconsData: iconType = {
    hero_bg: {
        "src": HeroBg,
        "alt": "Background image",
    },
    garant: {
        "src": Garant,
        "alt": "Garant",
    },
    hero_image: {
        "src": HeroImage,
        "alt": "Hero image",
    },
    clock: {
        src:iconClock ,
        alt: 'Clock',
    },
    leaf: {
        src:iconLeaf ,
        alt: 'Leaf',
    },
    arrows: {
        src:iconArrows ,
        alt: 'Arrows',
    },
    men_without_glumed: {
        src: menWithOutGlumed,
        alt: 'men WithOut Glumed'
    },
    men_with_glumed: {
        src: menWithGlumed,
        alt: 'men With Glumed'
    },
    dagger: {
        src: dagger,
        alt: 'Dagger'
    },
    check_mark: {
        src: checkMark,
        alt: 'Check mark'
    },
    circle_01: {
        src: circle_01,
        alt: 'Circle'
    },
    spot: {
        src: spot,
        alt: 'Spot'
    },
    calendar: {
        src: calendar,
        alt: 'Calendar'
    },
    react: {
        src: react,
        alt: 'React'
    },
    ok_hand: {
        src: okHand,
        alt: 'Ok Hand (Nice)'
    },
    why_glumed_grille: {
        src: whyGlumedGrille,
        alt: 'Grille background'
    },
    tablets:{
        src:tablets,
        alt:'Tablets'
    }

}