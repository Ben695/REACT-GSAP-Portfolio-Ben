import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, Language, TranslationKeys } from './translations';

interface LanguageContextType {
  language: Language;
  t: TranslationKeys;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check browser language preference
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'fr' ? 'fr' : 'fr'; // Default to French
  });

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const value: LanguageContextType = {
    language,
    t: translations[language],
    toggleLanguage,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
