import React from "react"
import styles from "./styles.module.scss"
import Container from "../container";
import Separator from "../separator";
import Image from "next/image";
import Link from "next/link";
import { Dictionary } from "@/types";
import Markdown from "react-markdown"
import { SOCIALS } from "@/utils/constants";

export interface FooterProps {
  dictionary: Dictionary
}


const Footer = ({ dictionary }: FooterProps) => (
  <>
    <Separator startPoint="bottomLeft" filledPart="bottom"/>
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <Markdown>{dictionary.footer.text}</Markdown>
        <div className={styles.socials}>
          {SOCIALS?.map(({ altText, icon, href }) => (
            <Link key={altText} href={href}>
              <Image
                src={icon}
                alt={altText}
              />
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  </>
);


export default Footer;