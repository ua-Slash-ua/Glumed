import { allCountries } from 'country-telephone-data';

export type PhoneItem = {
    name: string;    // Ukraine
    iso2: string;    // 'UA'
    dialCode: string; // '+380'
    flag: string;    // '🇺🇦'
};

// Конвертує 'ua' -> '🇺🇦'
function iso2ToFlagEmoji(iso2: string): string {
    if (!iso2) return '';
    return iso2
        .toUpperCase()
        .split('')
        .map(char => String.fromCodePoint(127397 + char.charCodeAt(0)))
        .join('');
}

// Генеруємо список усіх країн
export const phoneList: PhoneItem[] = allCountries.map(c => ({
    name: c.name,
    iso2: (c.iso2 || '').toUpperCase(),
    dialCode: c.dialCode ? `+${c.dialCode}` : '',
    flag: iso2ToFlagEmoji(c.iso2 || ''),
}));


