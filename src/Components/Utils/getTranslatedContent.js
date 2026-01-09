import enPortfolio from "./translations/portfolio/en"
import idPortfolio from "./translations/portfolio/id"
import jaPortfolio from "./translations/portfolio/ja"

const portfolioTranslations = {
  en: enPortfolio,
  id: idPortfolio,
  ja: jaPortfolio,
}

// Map original title to translation key
const titleToKey = {
  "Devkami (Project)": "devkami",
  "PTPN X (Internship)": "ptpnx",
  "Kampung Desa (Project)": "kampungDesa",
  "(有) ホーピング Hoping (Internship)": "hoping",
  "FKH Apps (Project)": "fkhapps",
  "Bloom Browser (Project)": "bloomBrowser",
  "Ini Dia Lo (Project)": "iniDiaLo",
  "Boleh Dicoba Digital": "bolehDicobaDigital",
  "Opsigo": "opsigo",
  "Kane Kashite": "kaneKashite",
  "Opsileave": "opsileave",
  "Haikal Management System": "haikalManagement",
}

export function getTranslatedContent(originalContent, language = "en") {
  const translations =
    portfolioTranslations[language] || portfolioTranslations.en
  const key = titleToKey[originalContent.title]

  if (!key || !translations[key]) {
    // Fallback to original content if translation not found
    return originalContent
  }

  const translated = translations[key]

  // Merge original content with translations, keeping non-translatable fields
  return {
    ...originalContent,
    title: translated.title || originalContent.title,
    job: translated.job || originalContent.job,
    description: translated.description || originalContent.description,
    descriptionOne: translated.descriptionOne || originalContent.descriptionOne,
    descriptionTwo: translated.descriptionTwo || originalContent.descriptionTwo,
    descriptionThree:
      translated.descriptionThree || originalContent.descriptionThree,
    descriptionFour:
      translated.descriptionFour || originalContent.descriptionFour,
    descriptionFive:
      translated.descriptionFive || originalContent.descriptionFive,
    functions: translated.functions || originalContent.functions,
    technologyIntro:
      translated.technologyIntro || originalContent.technologyIntro,
    technologies: translated.technologies || originalContent.technologies,
    outro: translated.outro || originalContent.outro,
    src2description:
      translated.imageCaptions?.login || originalContent.src2description,
    src3description:
      translated.imageCaptions?.dashboard || originalContent.src3description,
    // For Hoping component image captions
    imageCaptions: translated.imageCaptions || {},
  }
}
