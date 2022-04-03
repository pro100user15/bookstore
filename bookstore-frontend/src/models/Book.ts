export interface Author {
    id: number,
    name: string,
    surname: string
}

export interface Book {
    id: number,
    name: string,
    authors: Author[],
    image: string,
    price: number
}