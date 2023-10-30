import Footer from "@/components/footer/index"
import Header from "@/components/header/index"
import { Dictionary, Locales } from "@/types"
import { getDictionary } from "../dictionaries"

export interface MainLayoutProps {
  children: React.ReactNode,
  params: {
    lang: Locales
  }
}

const MainLayout = async ({ children, params: { lang } }: MainLayoutProps) => {
  const dict: Dictionary = await getDictionary(lang)
  return (
    <>
      <Header dictionary={dict} locale={lang} />
      <main>
        {children}
      </main>
      <Footer dictionary={dict}/>
    </>
  )
}

export default MainLayout