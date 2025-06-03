import { get } from "./Fetch"

export interface Theme {
    id: number
    name: string
    colors: Color
}

interface Color {
    background: string
    text: string
    primary: string
    secondary: string
}

export const getThemeData = async (): Promise<Theme[]> => {
    return get('http://localhost:3001/themes')
}