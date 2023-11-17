export const isMobileView = (userAgent: string | null) => {
  if(!userAgent) return false
  const mobileRegex = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  return userAgent!.match(mobileRegex)
}