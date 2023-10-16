export interface NextParamsProp {
  params: {
    lang: string
  }
}

type Locales = "en" | "es"

export interface HeaderProps {
  dictionary: Dictionary,
  locale: Locales
}

export type DictionaryKey = Locales

export interface DictionaryItem {
  [key: DictionaryKey]: string
}
export interface DictionaryObject {
  [key: DictionaryKey]: DictionaryItem
}

export type Dictionary = Record<DictionaryKey, Dictionary>

export interface DictionaryProp {
  [key: DictionaryKey]: Dictionary
}