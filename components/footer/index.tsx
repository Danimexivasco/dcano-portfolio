import React from "react";
import styles from "./styles.module.scss";
import Container from "../container";
import Separator from "../separator";
import { Dictionary } from "@/types";
import Markdown from "react-markdown";
import Socials from "../socials";

export interface FooterProps {
  dictionary: Dictionary
}


const Footer = ({ dictionary }: FooterProps) => (
  <>
    <Separator startPoint="bottomLeft" filledPart="bottom"/>
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <Markdown className={styles.text}>{dictionary.footer.text}</Markdown>
        <Socials />
      </Container>
    </footer>
  </>
);


export default Footer;