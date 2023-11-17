export const getRandomValue = (arr: Array<string> | Array<object>) =>  {
  if (!Array.isArray(arr) || arr.length === 0) return null

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[ randomIndex ];
}