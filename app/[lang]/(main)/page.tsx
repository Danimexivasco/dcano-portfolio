import { Dictionary, NextParamsProp } from "@/types";
import { getDictionary } from "../dictionaries"

export const generateMetadata = async ({ params }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(params.lang)
  return { title: dict.home.metadata.title };
}

const Home = async ({ params: { lang } }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(lang)

  return (
    <h1>{dict.home.headline}</h1>
  )
}

export default Home