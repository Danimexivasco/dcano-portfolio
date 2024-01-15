import Image from "next/image";
import SpainFlag from "/public/images/spain_flag.png"
import UsaFlag from "/public/images/usa_flag.png"

export const renderSpainLangOption = () => (
  <>
    <span>ES</span>
    <Image
      src={SpainFlag}
      alt="spain-flag"
      data-cy="spain-flag"
    />
  </>
)
export const renderUsaLangOption = () => (
  <>
    <span>EN</span>
    <Image
      src={UsaFlag}
      alt="usa-flag"
      data-cy="usa-flag"
    />
  </>
)