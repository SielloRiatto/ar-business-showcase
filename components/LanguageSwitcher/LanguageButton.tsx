'use client';

import Link from 'next/link';
import { Language } from '@/i18n';
import { setCookieLanguage } from '@/i18n/config';
import { useCallback } from 'react';

export function LanguageButton({
  lang,
  isActive
}: {
  lang: Language;
  isActive: boolean;
}) {
  const handleClick = useCallback(() => setCookieLanguage(lang), [lang]);

  return (
    <Link
      href={`/${lang}`}
      onClick={handleClick}
      className={`px-3 py-1 rounded transition ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
      }`}
    >
      {lang.toUpperCase()}
    </Link>
  );
}
