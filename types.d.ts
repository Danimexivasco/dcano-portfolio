export interface NextParamsProp {
  params: {
    lang: string
  }
}

export type DictionaryKey = string
export interface DictionaryItem {
  [key: DictionaryKey]: string
}
export interface DictionaryObject {
  [key: DictionaryKey]: DictionaryItem
}

export type Dictionary = Record<DictionaryKey, Dictionary>