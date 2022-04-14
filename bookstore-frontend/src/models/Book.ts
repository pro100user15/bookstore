import {Category} from "./Category";

export interface Author {
    id: number,
    name: string,
    surname: string
}

export interface Publishing {
    id: number,
    publishing_name: string
}

export interface Translator {
    id: number,
    name: string,
    surname: string
}

export interface BookList {
    id: number,
    name: string,
    authors: Author[],
    price: number,
    image: string,
    category: Category
}

export interface Book {
    id: number,
    name: string,
    authorsId: number[],
    price: number,
    image: string,
    category: Category,
    publishing: Publishing,
    bookSeries: string,
    amount: number,
    language: string,
    yearPublication: number,
    translatorId: number,
    numberPages: number,
    circulation: number,
    type: string
}

export interface BookDetails {
    id: number,
    name: string,
    authors: Author[],
    price: number,
    image: string,
    category: Category,
    publishingId: number,
    bookSeries: string,
    amount: number,
    language: string,
    yearPublication: number,
    translatorId: number,
    numberPages: number,
    circulation: number,
    type: string
}