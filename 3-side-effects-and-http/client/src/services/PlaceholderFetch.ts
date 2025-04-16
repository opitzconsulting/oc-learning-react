import { get } from "./Fetch"

interface JSONPlaceholderPost {
  userId: number
  id: number
  title: string
  body: string
}

// Methode, um Daten von JSONPlaceholder zu holen
export const getPlaceholderData = async (): Promise<JSONPlaceholderPost[]> => {
  return get('https://jsonplaceholder.typicode.com/posts')
}
