export const getNumberFromPx = (pxs: string) => {
  if (typeof pxs !== "string") throw new Error("Pxs should be a string");
  return Number(pxs.replace(/px/, ""))
}