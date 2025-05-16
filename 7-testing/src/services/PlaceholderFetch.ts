import { get } from "./Fetch"

export interface JSONPlaceholderPost {
  userId: number
  id: number
  title: string
  body: string
}

// Methode, um Daten von JSONPlaceholder zu holen
export const getPlaceholderDataById = async (id: number): Promise<JSONPlaceholderPost> => {
  return get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}
