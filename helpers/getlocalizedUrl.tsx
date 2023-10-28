export const getLocalizedUrl = (locale: string, pathname: string): string | null => {
  if (!pathname) return null
  const regex = new RegExp(`${locale === "en" ? `/\en` : `/\es`}`, "g");
  const targetLocale = locale === "en" ? "es" : "en"
  return pathname.replace(regex, `/${targetLocale}`)
}