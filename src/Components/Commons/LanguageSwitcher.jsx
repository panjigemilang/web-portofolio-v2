import React from "react"
import { useHistory, useLocation } from "react-router-dom"
import Index from "../../Context"
import { parseLanguageFromPath, getLocalizedPath } from "../Utils/languageRouting"
import "./languageSwitcher.scss"

export default function LanguageSwitcher() {
  const { language, setLanguage } = React.useContext(Index)
  const [isOpen, setIsOpen] = React.useState(false)
  const history = useHistory()
  const location = useLocation()

  const languages = [
    { code: "en", name: "English", flag: "🌐" },
    { code: "id", name: "Indonesia", flag: "🇮🇩" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
  ]

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0]

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode)
    setIsOpen(false)
    // Save to localStorage
    localStorage.setItem("language", langCode)
    
    // Get current path without language prefix
    const { path } = parseLanguageFromPath(location.pathname)
    
    // Navigate to the same path with new language prefix
    const newPath = getLocalizedPath(path, langCode)
    history.push(newPath)
  }

  React.useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem("language")
    if (
      savedLanguage &&
      ["en", "id", "ja"].includes(savedLanguage) &&
      savedLanguage !== language
    ) {
      setLanguage(savedLanguage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="language-switcher">
      <button
        className="language-switcher-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <span className="language-flag">{currentLanguage.flag}</span>
        <span className="language-code">
          {currentLanguage.code.toUpperCase()}
        </span>
        <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
      </button>
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${
                language === lang.code ? "active" : ""
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="language-flag">{lang.flag}</span>
              <span className="language-name">{lang.name}</span>
              {language === lang.code && <i className="fas fa-check"></i>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
