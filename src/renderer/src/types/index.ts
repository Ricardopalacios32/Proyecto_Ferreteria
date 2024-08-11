

export type product = {
    id: string,
    productName : string,
    productBuyPrice : number,
    productSellPrice : number,
    quantity: number,
    categoryId: string,
    categoryName : string,
    
}

export type productWithDates = {
    id : string,
    productName : string,
    productBuyPrice : number,
    productSellPrice : number,
    quantity: number,
    categoryId: string,
    categoryName : string,
    createdAt: string,
    editedAt?: string
}

export type category = {
    categoryId : string,
    categoryName : string
}