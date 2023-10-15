import { Metadata } from "next";
import Link from "next/link";
import React from "react"
import { headers } from "next/headers"
import { getDictionary } from "./[lang]/dictionaries";
import { getLocaleFromHeaders } from "@/helpers/getLocale";
import { Dictionary } from "@/types";

export const metadata: Metadata = {
  title: "404",
}


const NotFound = async () => {
  const headersList = headers()
  const lang = getLocaleFromHeaders(headersList)

  const dict: Dictionary = await getDictionary(lang)
  
  return (
    <>
      <h2>{dict.notFound.headline}</h2>
      <Link href={`/${lang}`}>{dict.notFound.cta}</Link>
    </>
  )
};


export default NotFound;