export interface NextParamsProp {
  params: {
    lang: string
  }
}

export type Locales = "en" | "es"

export interface HeaderProps {
  dictionary: Dictionary,
  locale: Locales
}

export interface DictionaryItem {
  [key: Locales]: string
}
export interface DictionaryObject {
  [key: Locales]: DictionaryItem
}

export type Dictionary = Record<Locales, Dictionary>

export interface DictionaryProp {
  [key: Locales]: Dictionary
}

export interface RandomColorMap {
  [key: string | null]: string;
}