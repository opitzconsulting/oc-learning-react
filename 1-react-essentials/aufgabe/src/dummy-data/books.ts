import {Book} from "../models/Book.ts";
import {Genre} from "../models/Genre.ts";

export function loadBooks(): Book[] {
    return [
        {
            id: 1,
            title: 'The Phoenix in the Forest',
            author: 'Andrew Mason',
            genre: Genre.Fantasy
        },
        {
            id: 2,
            title: 'Sign of the Hollow Footprint',
            author: 'Chelsea Moss',
            genre: Genre.Mystery
        },
        {
            id: 3,
            title: 'Eclipse of Artemis',
            author: 'Phyllis Adams',
            genre: Genre.Fantasy
        },
        {
            id: 4,
            title: 'The Mortal Casket',
            author: 'Regina Wood',
            genre: Genre.Crime
        },
        {
            id: 5,
            title: 'Steel Apocalypse',
            author: 'Philip Hardy',
            genre: Genre.SciFi
        },
        {
            id: 6,
            title: 'Dawn of Jupiter',
            author: 'Jessica Reynolds',
            genre: Genre.Fantasy
        },
        {
            id: 7,
            title: 'Death of the Fake Corgi',
            author: 'Brad Baker',
            genre: Genre.Crime
        }
    ];
}
