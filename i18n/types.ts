import en from '@/i18n/dictionaries/en.json';
import { languages } from './constants';

export type Language = typeof languages[number];
export type Dictionary = typeof en;
