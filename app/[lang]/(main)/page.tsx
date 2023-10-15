import { Dictionary, NextParamsProp } from "@/types";
import { Metadata } from "next"
import { getDictionary } from "../dictionaries"

export const generateMetadata = async ({ params }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(params.lang)
  return { title: dict.home.metadata.title };
}

const Home: React.FC<NextParamsProp> = async ({ params: { lang } }) => {
  const dict: Dictionary = await getDictionary(lang)

  return (
    <h1>{dict.home.headline}</h1>
  )
}

export default Home