import React from "react"
import { headers } from "next/headers";
import { isMobileView } from "@/helpers/detectDevice";
import Container from "../container";
import HistoryItem, { HistoryItemStructure } from "./item";

export interface HistoryProps {
  items: Array<HistoryItemStructure>
}

const History = ({ items = [] }: HistoryProps) => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
  return (
    <Container as="section">
      {items.map((item, idx) => (
        <HistoryItem
          key={item.headline}
          item={item}
          reverse={idx % 2}
          isMobile={isMobileView(userAgent)}
        />
      ))}
    </Container>
  )
};


export default History;