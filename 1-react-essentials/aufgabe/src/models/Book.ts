import {Genre} from "./Genre.ts";

export interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
}
