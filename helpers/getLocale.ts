import { DEFAULT_LOCALE, LOCALES_MAP } from "@/utils/constants";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export const getCleanLocale = (locale: string) : string => {
  if (!locale) throw new Error("Locale must be provided")
  if (typeof locale !== "string") throw new Error("Locale should be a string")
  return locale.split("-")[ 0 ]
}

export const getLocaleFromHeaders = (headers : ReadonlyHeaders) => {
  if (!headers) return DEFAULT_LOCALE
  const headerLang = headers.get("accept-language")
  const lang = Object.entries(LOCALES_MAP).find(([ key ]) => headerLang?.includes(key))
  return lang ? lang[ 1 ] : DEFAULT_LOCALE
}