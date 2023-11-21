import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "@/styles/globals.scss"

const ubuntu = Ubuntu({ subsets: [ "latin" ], weight: [ "400", "700" ] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dcano.dev"),
  title: {
    template: "%s | Dcano Dev",
    default: "Home",
  },
  description: "Welcome to Daniel Cano's Portfolio!",
  alternates: {
    canonical: "https://www.dcano.dev/",
    languages: {
      "en-US": "https://www.dcano.dev/en",
      "es-ES": "https://www.dcano.dev/es",
    },
  },
  themeColor: "#222222",
  keywords: [ "Dcano Dev", "Dcano", "front-end", "full-stack", "developer", "React", "Jamstack" ],
  openGraph: {
    images: [ "https://www.dcano.dev/opengraph-image.jpeg" ]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {children}
      </body>
    </html>
  )
}
