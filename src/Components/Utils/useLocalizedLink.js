import { useMemo } from "react"
import { getLocalizedPath } from "./languageRouting"

/**
 * Hook to generate language-aware links
 * @param {string} basePath - Base path without language prefix
 * @param {string} language - Optional language override
 * @returns {string} - Localized path
 */
export function useLocalizedLink(basePath, language = null) {
  return useMemo(() => {
    return getLocalizedPath(basePath, language)
  }, [basePath, language])
}

