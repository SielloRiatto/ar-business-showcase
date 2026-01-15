import LanguageSwitcher from '@/components/LanguageSwitcher';
import ExperienceCard from '@/components/ExperienceCard';
import BackgroundGlow from '@/components/BackgroundGlow';
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
      <div className="min-h-screen flex flex-col bg-slate-950 relative overflow-hidden">
        <BackgroundGlow />
        
        <header className="p-4 relative z-10">
          <nav className="flex justify-between items-center">
            <LanguageSwitcher language_code={language_code} />
          </nav>
        </header>

        <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left side - Hero content */}
            <div className='h-full md:p-20'>
              <h1 className="text-5xl font-bold mb-12 text-white">
                {dictionary.home.title}
              </h1>
              <p className="text-xl text-gray-400 whitespace-pre-line">
                {dictionary.home.subtitle}
              </p>
            </div>

            {/* Right side - Experience cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dictionary.experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  title={experience.title}
                  description={experience.description}
                  icon={experience.icon}
                  href={experience.href}
                  language_code={language_code}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
  );
}
