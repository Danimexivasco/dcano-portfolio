import "server-only"

type DictionaryLoader = () => Promise<{}>;


export interface Dictionaries {
  [key: string]: DictionaryLoader;
}
 
const dictionaries: Dictionaries = {
  en: () => import("../../dictionaries/en.json").then((module) => module.default),
  es: () => import("../../dictionaries/es.json").then((module) => module.default),
}
 
export const getDictionary = async (locale: string) => dictionaries[ locale ]()