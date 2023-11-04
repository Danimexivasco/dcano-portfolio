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

export interface DicitionaryNode {
  [key: string]: string
}

export interface DictionaryItem {
  [key: string]: string | DicitionaryNode | ReactNode
}

export type Dictionary = Record<string, DictionaryItem>

export interface RandomColorMap {
  [key: string | null]: string;
}
export interface TechnologyItem {
  [key: string]: string;
}