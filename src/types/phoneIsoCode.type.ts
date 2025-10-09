import { allCountries } from 'country-telephone-data';

// Отримуємо масив ISO-кодів (наприклад: ['UA', 'US', 'DE', ...])
export const isoList = allCountries
    .map(c => (c.iso2 || '').toUpperCase())
    .filter(Boolean);

// Видаляємо дублікати
export const uniqueIsoList = Array.from(new Set(isoList));

// Генеруємо тип
export type PhoneIsoCodes = typeof uniqueIsoList[number];