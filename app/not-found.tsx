import React from "react"
import { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers"
import { getDictionary } from "./[lang]/dictionaries";
import { getLocaleFromHeaders } from "@/helpers/getLocale";
import { Dictionary, QuoteItem } from "@/types";
import SpaceImg from "../public/images/jwst.webp"
import Container from "@/components/container";
import Card from "@/components/card";
import Link from "@/components/link";
import styles from "./styles.module.scss"
import { getRandomValue } from "@/helpers/getRandomValue";
import { LOCALES_MAP, QUOTES_404 } from "@/utils/constants";

export const metadata: Metadata = {
  title: "404",
}


const NotFound = async () => {
  const headersList = headers()
  const lang = getLocaleFromHeaders(headersList)
  const dict: Dictionary = await getDictionary(LOCALES_MAP[ lang ] || "en")
  const quote = getRandomValue(QUOTES_404[ lang ]) as QuoteItem
  
  return (
    <div className={styles.notFound}>
      <Image
        src={SpaceImg}
        alt="jwst-img"
        className={styles.spaceImg}
        priority
      />
      <Container className={styles.container}>
        <Card className={styles.card}>
          {quote &&
            <blockquote>
              <p>&quot;{quote.quote}&quot;</p>
              <footer>—{quote.author}{quote.source && <cite>, {quote.source}</cite>}</footer>
            </blockquote>
          }
          <Link href={`/${lang}`} asButton centered className={styles.cta}>{dict.notFound.cta}</Link>
        </Card>
      </Container>
    </div>
  )
};


export default NotFound;