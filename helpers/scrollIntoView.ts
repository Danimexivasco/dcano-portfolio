import { MouseEvent, MouseEventHandler } from "react";

export const scrollIntoView: MouseEventHandler<HTMLDivElement> = (e) => {
  const event = e as MouseEvent<HTMLDivElement>;
  event.currentTarget.scrollIntoView({ behavior: "smooth", block: "center" });
}