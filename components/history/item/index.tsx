"use client"

import React from "react"
import Image, { StaticImageData } from "next/image";
import ReactMarkdown from "react-markdown";
import { useInView } from "react-intersection-observer";
import { combine } from "@/helpers/combine";
import styles from "./styles.module.scss"

export type HistoryItemStructure = {
  headline: string
  date: string
  text: string
  image: {
    src: StaticImageData
    alt: string
  }
}

export interface HistoryItemProps {
  item: HistoryItemStructure
  reverse: boolean | number
  isMobile: false | RegExpMatchArray | null
}


const HistoryItem = ({ item, reverse, isMobile }: HistoryItemProps) => {
  const { headline, date, text, image } = item;
  const { ref, inView } = useInView({
    threshold: isMobile ? 0.1 : 0.4,
  });
  
  return (
    <div className={combine(styles.historyItem, reverse && styles.reverse, inView && styles.showing)} ref={ref}>
      <div>
        <h2 className={styles.headline}>{headline}</h2>
        <h4 className={styles.date}>{date}</h4>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      <Image
        alt={image.alt}
        src={image.src}
        width={540}
        height={390}
        className={styles.image}
      />
    </div>
  )
};


export default HistoryItem;