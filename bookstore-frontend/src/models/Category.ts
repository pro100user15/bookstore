export interface Category {
    id: number,
    name: number
}

export interface CategoryWithCountBooks extends Category {
    countBooks: number
}