export const checkUrl = (slug: string, pathname: string): boolean | null => {
  if (!pathname) return null
  return pathname.includes(slug)
}