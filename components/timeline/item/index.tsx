"use client"

import React from "react"
import { useInView } from "react-intersection-observer";
import { combine } from "@/helpers/combine";
import { scrollIntoView } from "@/helpers/scrollIntoView";
import Link from "@/components/link";
import styles from "./styles.module.scss"

export type TimelineItemStructure = {
  year: number
  headline: string
  subHeadline: string
  fromTo: string
  duration: string
  url?: undefined
} | {
  year: number
  headline: string
  url: string
  subHeadline: string
  fromTo: string
  duration: string
};

export interface TimelineItemProps {
  item: TimelineItemStructure,
  containerClassName: string,
}

const TimelineItem = ({ item, containerClassName }: TimelineItemProps) => {
  const { year, headline, url, subHeadline, fromTo, duration } = item;
  const { ref, inView } = useInView({
    rootMargin: "-58% 0% -42% 0%",
    threshold: 0,
  });

  return (
    <div className={combine(styles.container, containerClassName, inView && styles.active)} ref={ref} onClick={scrollIntoView}>
      <div className={styles.content}>
        <h4 className={styles.year}><b>{year}</b></h4>
        <h4 className={combine(styles.headline, url && styles.link)}>{url ? <Link href={url} external>{headline} &#10697;</Link>: headline}</h4>
        <h5 className={styles.subHeadline}>{subHeadline}</h5>
        <p className={styles.fromTo}>{fromTo}</p>
        <small className={styles.duration}>{duration}</small>
      </div>
    </div>
  )
};


export default TimelineItem;