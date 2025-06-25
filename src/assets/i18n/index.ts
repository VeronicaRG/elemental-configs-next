import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import es from './locales/es.json'
import ptBR from './locales/pt-BR.json'

i18n.use(initReactI18next).init({
  lng: 'es', 
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    es: { translation: es },
    'pt-BR': { translation: ptBR },
  },
  interpolation: {
    escapeValue: false,
  },
})

export default i18n