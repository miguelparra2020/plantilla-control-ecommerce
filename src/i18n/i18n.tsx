import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enCommon from "../locales/en/common.json"
import esCommon from "../locales/es/common.json"
import frCommon from "../locales/fr/common.json"
import ptCommon from "../locales/pt/common.json"

const resources = {
  en: { common: enCommon },
  es: { common: esCommon },
  fr: { common: frCommon },
  pt: { common: ptCommon },
} as const

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    debug: true, 
  })

export default i18n
