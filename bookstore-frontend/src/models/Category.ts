export interface Category {
    id: number,
    name: string
}

export interface CategoryWithCountBooks extends Category {
    countBooks: number
}