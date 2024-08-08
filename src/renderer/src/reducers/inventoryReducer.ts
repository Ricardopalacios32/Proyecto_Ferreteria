
import type { productWithDates, product } from "@renderer/types";
import {v4 as uuidv4} from 'uuid'


export type inventorystate = {
    products : productWithDates[]
    auth : boolean
}

export const initialstate : inventorystate = {
    products : [],
    auth : false
}

export type inventoryActions = 
{type : 'authenticate', payload:{'password' : string}} |
{type : 'createProduct', payload:{'product' : product}} |
{type : 'editProduct', payload:{'product' : product, 'id' : string}}

export const inventoryReducer = (

    state : inventorystate = initialstate,
    actions : inventoryActions

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => {

    if(actions.type === 'authenticate'){
        return{
            ...state
        }
    }
    if(actions.type === 'createProduct'){

        const currentDate = new Date();

        const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getFullYear()).slice(-2)}`;

        const product = {
            ...actions.payload.product,
            id : uuidv4(),
            //cambiar
            categoryName: 'tornillos',
            createdAt : formattedDate
        }
        return{
            ...state,
            products : [...state.products, product]
        }
    }
    if(actions.type === 'editProduct'){

        const currentDate = new Date();

        const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getFullYear()).slice(-2)}`;

        return {
            ...state,
            products : [state.products.map(product => product.id !== actions.payload.id ? product : {
                ...actions.payload.product, 
                createdAt : product.createdAt, 
                editedAt : formattedDate, 
                categoryName : 'tornillos'})
            ]
        }
    }

    return state
}