import React from "react"
import Separator from "../separator"
import Container from "../container"
import Link from "../link"
import styles from "./styles.module.scss"

export type BannerCta = {
  text: string
  href: string
}

export interface BannerProps {
  text: string
  ctas: Array<BannerCta>
}


const Banner = ({ text, ctas }: BannerProps) => {
  return (
    <>
      <Separator startPoint="topLeft" filledPart="bottom"/>
      <section className={styles.banner}>
        <Container>
          <h2>{text}</h2>
          <div className={styles.ctas}>
            {ctas?.map(cta => <Link key={cta.text} href={cta.href} asButton external>{cta.text} &#10697;</Link>)}
          </div>
        </Container>
      </section>
      <Separator startPoint="topLeft" filledPart="top"/>
    </>
  )
};


export default Banner;