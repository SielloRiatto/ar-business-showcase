import { NextRequest } from 'next/server';
import { defaultLanguage, languageKey, supportedLanguages, yearInSeconds } from './constants';
import { Dictionary, Language } from './types';

function languageIsSupported(lang: string): boolean {
    return supportedLanguages.has(lang as Language);
}

export function setCookieLanguage(lang: Language): void {
    if (typeof window === 'undefined') return;
    document.cookie = `${languageKey}=${lang}; path=/; max-age=${yearInSeconds}`;
}

function getCookieLanguage(request: NextRequest): string | null {
    return request.cookies.get(languageKey)?.value ?? null;
}

function getAcceptLanguage(request: NextRequest): string | null {
    const acceptLanguage = request.headers.get('accept-language');
    return acceptLanguage?.split(',')[0].split('-')[0] ?? null;
}

function getStoredLanguage(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(languageKey);
}

function getBrowserLanguage(): string | null {
    if (typeof navigator === 'undefined') return null;
    return navigator.language.split('-')[0];
}

export function getLanguageOnClient(): Language {
    const storedLang = getStoredLanguage();
    if (storedLang && languageIsSupported(storedLang)) return storedLang as Language;

    const browserLang = getBrowserLanguage();
    if (browserLang && languageIsSupported(browserLang)) return browserLang as Language;
    
    return defaultLanguage;
}

export function getLanguageOnServer(request: NextRequest): Language {
    const cookieLang = getCookieLanguage(request);
    if (cookieLang && languageIsSupported(cookieLang)) return cookieLang as Language;

    const acceptLang = getAcceptLanguage(request);
    if (acceptLang && languageIsSupported(acceptLang)) return acceptLang as Language;

    return defaultLanguage;
}

export function pathnameHasLanguage(pathname: string): boolean { 
    const segments = pathname.split('/');
    return segments.length > 1 && languageIsSupported(segments[1]);
}

export async function getDictionary (lang: string) {
    const dictionary = await import(`@/i18n/dictionaries/${lang}.json`);
    return dictionary.default as Dictionary;
}
