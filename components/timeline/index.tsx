import React from "react"
import ReactMarkdown from "react-markdown";
import Container from "../container";
import TimelineItem, { TimelineItemStructure } from "./item";
import styles from "./styles.module.scss"


export interface TimelineProps {
  headline: string
  text: string
  items: Array<TimelineItemStructure>
}

const Timeline = ({ headline, text, items = [] }: TimelineProps) => {
  return (
    <section className={styles.timelineContainer}>
      <Container>
        <h2 className={styles.headline}>{headline}</h2>
        <ReactMarkdown className={styles.text}>{text}</ReactMarkdown>
        <div className={styles.timeline}>
          {items.map((item, idx) => (
            <TimelineItem
              key={item.headline}
              item={item}
              containerClassName={idx % 2 ? styles.right : styles.left}
            />
          ))}
        </div>
      </Container>
    </section>
  )
};


export default Timeline;