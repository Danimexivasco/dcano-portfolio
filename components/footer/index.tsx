import React from "react";
import styles from "./styles.module.scss";
import Container from "../container";
import Separator from "../separator";
import { Dictionary } from "@/types";
import Markdown from "react-markdown";
import Socials from "../socials";
import Link from "../link";
import { CALENDLY_URL } from "@/utils/constants";

export interface FooterProps {
  dictionary: Dictionary
}


const Footer = ({ dictionary }: FooterProps) => (
  <>
    <Separator startPoint="bottomLeft" filledPart="bottom"/>
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <Markdown className={styles.text}>{dictionary.footer.text}</Markdown>
        <Link href={CALENDLY_URL} asButton external className={styles.contactCta}>{dictionary.contactCta.text} &#10697;</Link>
        <Socials />
      </Container>
    </footer>
  </>
);


export default Footer;