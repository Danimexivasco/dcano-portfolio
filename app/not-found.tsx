import { Metadata } from "next";
import Link from "next/link";
import React from "react"
import { headers } from "next/headers"
import { getDictionary } from "./[lang]/dictionaries";
import { getLocaleFromHeaders } from "@/helpers/getLocale";
import { Dictionary } from "@/types";
import styles from "./styles.module.scss"
import SpaceImg from "../public/images/jwst.jpeg"
import Image from "next/image";
import Container from "@/components/container";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "404",
}


const NotFound = async () => {
  const headersList = headers()
  const lang = getLocaleFromHeaders(headersList)

  const dict: Dictionary = await getDictionary(lang)
  
  return (
    <div className={styles.notFound}>
      <Image
        src={SpaceImg}
        alt="jwst-img"
        className={styles.spaceImg}
      />
      <Container className={styles.container}>
        <Card className={styles.card}>
          <h2>{dict.notFound.headline}</h2>
          <Link href={`/${lang}`}>{dict.notFound.cta}</Link>
        </Card>
      </Container>
    </div>
  )
};


export default NotFound;