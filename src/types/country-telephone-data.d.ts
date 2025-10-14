declare module 'country-telephone-data' {
    export const allCountries: {
        name: string;
        iso2: string;
        dialCode: string;
        priority?: number;
        areaCodes?: string[];
    }[];
}

declare module '*.mp4' {
    const src: string;
    export default src;
}



