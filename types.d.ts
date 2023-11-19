
export type Locales = "en" | "es"

export type Dictionary = Record<string, DictionaryItem>

export type NullishTypes = boolean | undefined | null | 0

export interface NextParamsProp {
  params: {
    lang: string
    project?: string
  }
}
export interface HeaderProps {
  dictionary: Dictionary
  locale: Locales
}

export interface MobileHeaderProps extends HeaderProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  handleMenu: () => void
}

export interface DicitionaryNode {
  [key: string]: string
}

export interface DictionaryItem {
  [key: string]: string | DicitionaryNode | ReactNode
}


export interface RandomColorMap {
  [key: string | null]: string;
}
export interface TechnologyItem {
  [key: string]: string;
}

export interface QuoteItem {
  quote: string
  author: string
  source?: string
}

export interface NavigationItem {
  slug: string
  page: string
}
export interface SocialItem {
  alt: string
  icon: StaticImageData
  href: string
}