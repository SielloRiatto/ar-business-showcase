import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getDictionary, Language } from '@/i18n';
import { use } from 'react';

export default function Home(
  {
    params,
  }: Readonly<{
      params: Promise<{ language_code: Language }>
    }>
) {
  const { language_code } = use(params)  
  const dictionary = use(getDictionary(language_code))

  return (
      <div className="min-h-screen flex flex-col">
        <header className="p-4">
          <nav className="flex justify-between items-center">
            <LanguageSwitcher language_code={language_code} />
          </nav>
        </header>

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-4">
              {dictionary.home.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {dictionary.home.subtitle}
            </p>
          </div>
        </main>
      </div>
  );
}
