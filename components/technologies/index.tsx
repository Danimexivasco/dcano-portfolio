"use client"

import React, { useEffect } from "react"
import styles from "./styles.module.scss"
import Container from "../container";
import Tag from "../tag";
import { TechnologyItem } from "@/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { combine } from "@/helpers/combine";
gsap.registerPlugin(ScrollTrigger);

export interface TechnologiesProps {
  headline: string,
  text: string,
  items: Array<TechnologyItem>
}

const Technologies = ({ headline, text, items }: TechnologiesProps) => {

  useEffect(() => {
    gsap.defaults({ ease: "power3" });
    gsap.set(".tag", { y: 70 });
    ScrollTrigger.batch(".tag", {
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 0.15, stagger: { each: 0.15, grid: [ 1, 3 ] }, overwrite: true }),
      onLeave: batch => gsap.set(batch, { opacity: 0, y: -70, duration: 0.15, overwrite: true }),
      onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 0.15, stagger: 0.15, overwrite: true }),
      onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 70, duration: 0.15, overwrite: true })
    });

    ScrollTrigger.addEventListener("refreshInit", () => {
      gsap.set(".tag", { y: 0 })
      return
    });
  }, [])
  return (
    <section className={styles.technologies}>
      <Container>
        <h2 className={styles.title}>{headline}</h2>
        <p>{text}</p>
        <div className={styles.container}>
          {items?.map((item) => <Tag key={item.name} item={item} className={combine(styles.hidden, "tag")}/>)}
        </div>
      </Container>
    </section>
  )
};


export default Technologies;