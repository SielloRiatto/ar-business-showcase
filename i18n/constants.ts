import { Language } from "./types";

export const defaultLanguage: Language = 'en';
export const languages = ['en', 'es'] as const;
export const supportedLanguages = new Set<Language>(languages);
export const yearInSeconds = 31536000; // 1 year
export const languageKey = 'preferred-language';
