import { match } from "@formatjs/intl-localematcher"
import Negotiator, { Headers } from "negotiator"
import { NextRequest } from "next/server"
import { getCleanLocale } from "./helpers/getLocale"
import { DEFAULT_LOCALE, LOCALES } from "./utils/constants"

const getLocale = (request: NextRequest) => {
  const headers: Headers = { "accept-language": request.headers.get("accept-language") ?? "" };
  const languages = new Negotiator({ headers })?.languages()
  return match(languages, LOCALES, DEFAULT_LOCALE)
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${getCleanLocale(locale)}/`) || pathname === `/${getCleanLocale(locale)}`
  )
 
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${getCleanLocale(locale)}${pathname}`
  return Response.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [ "/((?!api|_next/static|_next/image|favicon.ico).*)" ],
}