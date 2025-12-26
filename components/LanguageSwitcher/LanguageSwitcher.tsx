import { Language, supportedLanguages } from '@/i18n';
import { LanguageButton } from './LanguageButton';

export default function LanguageSwitcher({
  language_code
}: {
  language_code: Language
}) {
  return (
    <div className="flex gap-2 items-center">
      {[...supportedLanguages].map((lang) => (
        <LanguageButton
          key={lang}
          lang={lang}
          isActive={language_code === lang}
        />
      ))}
    </div>
  );
}
