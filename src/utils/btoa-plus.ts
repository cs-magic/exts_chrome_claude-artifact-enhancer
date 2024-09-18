// Helper function to encode Unicode strings
export function btoaPlus(str: string) {
  return btoa(unescape(encodeURIComponent(str)));
}
