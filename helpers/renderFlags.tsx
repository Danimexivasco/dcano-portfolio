import Image from "next/image";
import SpainFlag from "/public/images/spain_flag.png"
import UsaFlag from "/public/images/usa_flag.png"

export const renderSpainLangOption = () => (
  <>
    <span>ES</span>
    <Image
      src={SpainFlag}
      alt="spain-flag"
    />
  </>
)
export const renderUsaLangOption = () => (
  <>
    <span>EN</span>
    <Image
      src={UsaFlag}
      alt="spain-flag"
    />
  </>
)