import React from "react"
import { Locales } from "@/types";
import styles from "./styles.module.scss"
import Container from "../container";
import Image from "next/image";
import Separator from "../separator";
import { combine } from "@/helpers/combine";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Markdown from "react-markdown";

export interface HeroProps {
  headline: string,
  subHeadline: string,
  text: string,
  img: {
    src: StaticImport,
    altText: string
  },
  isHome: boolean,
  locale: Locales
}

const Hero = ({ headline, subHeadline, text, img, isHome, locale }: HeroProps) => {
  return (
    <>
      <section className={styles.hero}>
        <Container className={styles.container}>
          <div className={styles.content}>
            {isHome &&
              <div className={styles.typed}>
                <p className={combine(styles.placeholder, styles[ locale ])}></p>
              </div>
            }
            <h1 className={styles.headline}>{headline}</h1>
            <Markdown className={styles.subHeadline}>{subHeadline}</Markdown>
            <p>{text}</p>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.shadowContainer}>
              <div className={styles.hexagon}>
                <Image
                  src={img.src}
                  alt={img.altText}
                  width={300}
                  height={300}
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Separator startPoint="bottomLeft" filledPart="top"/>
    </>
  )
};


export default Hero;