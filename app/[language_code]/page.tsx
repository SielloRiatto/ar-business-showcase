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
        <header className="p-4 border-b">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex gap-6">
              <a href="#" className="hover:underline">{dictionary.nav.home}</a>
              <a href="#" className="hover:underline">{dictionary.nav.about}</a>
              <a href="#" className="hover:underline">{dictionary.nav.services}</a>
              <a href="#" className="hover:underline">{dictionary.nav.contact}</a>
            </div>
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
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
              {dictionary.home.cta}
            </button>
          </div>
        </main>
      </div>
  );
}
