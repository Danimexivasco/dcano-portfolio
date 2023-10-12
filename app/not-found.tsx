import { Metadata } from "next";
import Link from "next/link";
import React from "react"

export const metadata: Metadata = {
  title: "404",
}

const NotFound = () => {
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </>
  )
};


export default NotFound;