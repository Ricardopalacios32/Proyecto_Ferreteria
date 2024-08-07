
import type { productWithId } from "@renderer/types";


export type inventorystate = {
    products : productWithId[]
    auth : boolean
}

export const initialstate : inventorystate = {
    products : [],
    auth : false
}

export type inventoryActions = 
{type : 'authenticate', payload:{'password' : string}}

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

    return state
}