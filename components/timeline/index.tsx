import React from "react"
import Container from "../container";
import TimelineItem, { TimelineItemStructure } from "./item";
import styles from "./styles.module.scss"


export interface TimelineProps {
  headline: string,
  items: Array<TimelineItemStructure>
}

const Timeline = ({ headline, items = [] }: TimelineProps) => {
  return (
    <section className={styles.timelineContainer}>
      <Container>
        <h2 className={styles.headline}>{headline}</h2>
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