import Footer from "@/components/footer/index"
import Header from "@/components/header/index"
import { Dictionary } from "@/types"
import { getDictionary } from "../dictionaries"

export interface MainLayoutProps {
  children: React.ReactNode,
  params: {
    lang: string
  }
}

const MainLayout = async ({ children, params: { lang } }: MainLayoutProps) => {
  const dict: Dictionary = await getDictionary(lang)
  return (
    <>
      <Header dictionary={dict} locale={lang}/>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout