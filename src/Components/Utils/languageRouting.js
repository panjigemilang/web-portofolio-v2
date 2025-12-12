/**
 * Language routing utilities
 * Handles language detection from URL and URL generation with language prefixes
 */

// Language code mapping (support both jp and ja for Japanese)
const LANGUAGE_MAP = {
  en: "en",
  id: "id",
  ja: "ja",
  jp: "ja", // Support jp as alias for ja
}

const VALID_LANGUAGES = ["en", "id", "ja"]

/**
 * Extract language from URL path
 * @param {string} pathname - Current pathname
 * @returns {object} - { language: string, path: string }
 */
export function parseLanguageFromPath(pathname) {
  // Remove leading slash and split
  const parts = pathname.split("/").filter(Boolean)
  
  if (parts.length === 0) {
    return { language: "en", path: "/" }
  }

  const firstPart = parts[0].toLowerCase()
  
  // Check if first part is a language code
  if (LANGUAGE_MAP[firstPart]) {
    const language = LANGUAGE_MAP[firstPart]
    const remainingPath = parts.slice(1).join("/")
    const path = remainingPath ? `/${remainingPath}` : "/"
    return { language, path }
  }

  // No language prefix, default to English
  return { language: "en", path: pathname }
}

/**
 * Get current language from URL or localStorage
 * @returns {string} - Language code
 */
export function getCurrentLanguage() {
  if (typeof window === "undefined") return "en"
  
  const { language } = parseLanguageFromPath(window.location.pathname)
  return language
}

/**
 * Generate URL with language prefix
 * @param {string} path - Base path (e.g., "/about", "/portofolio")
 * @param {string} language - Language code (defaults to current language)
 * @returns {string} - Path with language prefix
 */
export function getLocalizedPath(path, language = null) {
  if (typeof window === "undefined") return path
  
  const currentLang = language || getCurrentLanguage()
  
  // Don't add prefix for default language (English) if path is root
  if (currentLang === "en" && path === "/") {
    return "/"
  }
  
  // For non-English or non-root paths, add language prefix
  if (currentLang !== "en" || path !== "/") {
    // Remove leading slash from path if it exists
    const cleanPath = path.startsWith("/") ? path.slice(1) : path
    return `/${currentLang}${cleanPath ? `/${cleanPath}` : ""}`
  }
  
  return path
}

/**
 * Get path without language prefix
 * @param {string} pathname - Full pathname
 * @returns {string} - Path without language prefix
 */
export function getPathWithoutLanguage(pathname) {
  const { path } = parseLanguageFromPath(pathname)
  return path
}

/**
 * Check if a string is a valid language code
 * @param {string} code - Language code to check
 * @returns {boolean}
 */
export function isValidLanguage(code) {
  return VALID_LANGUAGES.includes(code)
}

