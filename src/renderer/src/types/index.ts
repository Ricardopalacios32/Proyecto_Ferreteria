

export type product = {
    productName : string,
    productBuyPrice : number,
    productSellPrice : number,
    quantity: number,
    categoryId: string,
    categoryName : string,
    createdAt: Date,
    editedAt: Date
}

export type productWithId = {
    id : string,
    productName : string,
    productBuyPrice : number,
    productSellPrice : number,
    quantity: number,
    categoryId: string,
    categoryName : string,
    createdAt: Date,
    editedAt: Date
}