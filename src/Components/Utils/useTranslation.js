import React from "react"
import Index from "../../Context"
import enTranslations from "./translations/en"
import idTranslations from "./translations/id"
import jaTranslations from "./translations/ja"

const translations = {
  en: enTranslations,
  id: idTranslations,
  ja: jaTranslations,
}

export default function useTranslation() {
  const { language } = React.useContext(Index)

  const t = (key, params = {}) => {
    const keys = key.split(".")
    let value = translations[language] || translations.en

    for (const k of keys) {
      value = value?.[k]
      if (!value) {
        // Fallback to English if translation not found
        value = translations.en
        for (const k2 of keys) {
          value = value?.[k2]
        }
        break
      }
    }

    if (typeof value === "string" && params) {
      return value.replace(/\{(\w+)\}/g, (match, key) => {
        return params[key] !== undefined ? params[key] : match
      })
    }

    return value || key
  }

  return { t, language }
}

