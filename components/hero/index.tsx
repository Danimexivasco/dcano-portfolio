import React from "react"
import Image from "next/image";
import Markdown from "react-markdown";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { Locales } from "@/types";
import { combine } from "@/helpers/combine";
import Container from "../container";
import Separator from "../separator";
import Link from "../link";
import styles from "./styles.module.scss"
import { CALENDLY_URL } from "@/utils/constants";

export interface HeroProps {
  headline?: string
  subHeadline?: string
  text?: string
  img?: {
    src: StaticImageData
    srcLight?: StaticImageData
    alt: string
  }
  isHome?: boolean
  isProjectDetail?: boolean
  locale?: Locales
  cuttedShapeStartPoint?: "topLeft" | "bottomLeft"
  squareImg?: boolean
  projectCtaHref?: string
  projectCtaText?: string
  projectCtaRepoText?: string
  projectCtaRepoHref?: string
  isPersonalProject?: boolean
  contactCtaText?: string
}


const Hero = ({ headline, subHeadline, text, img, isHome, cuttedShapeStartPoint, isProjectDetail, locale = "en", squareImg, projectCtaHref, projectCtaText, projectCtaRepoText, projectCtaRepoHref, isPersonalProject, contactCtaText }: HeroProps) => {
  const isThisPortfolio = projectCtaHref === "/"

  return (
    <>
      <section className={combine(styles.hero, (!img || isProjectDetail) && styles.withoutImg)}>
        <Container className={styles.container}>
          {!isProjectDetail ? (
            <>
              <div data-cy="hero-text-content">
                {isHome &&
                <div className={styles.typed}>
                  <p className={combine(styles.placeholder, styles[ locale ])}></p>
                </div>
                }
                <h1 className={styles.headline}>{headline}</h1>
                {subHeadline &&
                  <Markdown className={combine(styles.subHeadline, "cy-sub-headline")}>{subHeadline}</Markdown>
                }
                {text &&
                  <Markdown className={styles.text}>{text}</Markdown>
                }
                <Link href={CALENDLY_URL} asButton external className={styles.contactCta}>{contactCtaText} &#10697;</Link>
              </div>
              {(img && !isProjectDetail) &&
                <div className={styles.imgContainer}>
                  <div className={styles.shadowContainer}>
                    <div className={styles.hexagon}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={300}
                        height={300}
                        priority
                        className={styles.img}
                      />
                    </div>
                  </div>
                </div>
              }
            </>
          ) : (
            <div className={styles.projectDetail}>
              {isPersonalProject ? (
                <h1 className={combine(styles.headline, styles.centered)}>{headline}</h1>
              ) : (
                img &&
                <Image
                  src={img.srcLight || img.src}
                  alt={img.alt}
                  width={300}
                  height={300}
                  priority
                  className={combine(styles.img, squareImg && styles.square)}
                />
              )}
              <div className={styles.ctas}>
                {projectCtaHref && projectCtaText ?
                  isThisPortfolio ? (
                    <Link href={projectCtaHref} asButton>{projectCtaText}</Link>
                  ) : (
                    <Link href={projectCtaHref} asButton external>{projectCtaText} &#10697;</Link>
                  )
                  : null
                }
                {projectCtaRepoHref &&
                  <Link href={projectCtaRepoHref} asButton external>
                    {projectCtaRepoText} &#10697;
                  </Link>
                }
              </div>
            </div>
          )}
        </Container>
      </section>
      {cuttedShapeStartPoint === "topLeft" ? (
        <Separator startPoint="topLeft" filledPart="top"/>
      ) : (
        <Separator startPoint="bottomLeft" filledPart="top"/>
      )}
    </>
  )
};


export default Hero;