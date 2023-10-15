import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer/index"
import Header from "@/components/header/index"
import "@/styles/globals.scss"

const inter = Inter({ subsets: [ "latin" ] })

export const metadata: Metadata = {
  // metadataBase: new URL("https://dcano.dev"),
  title: {
    template: "%s | Dcano Dev",
    default: "Home", // a default is required when creating a template
  },
  description: "Welcome to Daniel Cano's Portfolio!",
  alternates: {
    canonical: "https:dcano.dev/",
    languages: {
      "en-US": "https:dcano.dev/en",
      "es-ES": "https:dcano.dev/es",
    },
  },
  // openGraph: {
  //   images: "/og-image.png",
  // },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
