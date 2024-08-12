
import type { productWithDates, product, category } from "@renderer/types";



export type inventorystate = {
    products : productWithDates[]
    categories: category[]
    auth : boolean
}

export const initialstate : inventorystate = {
    products : [],
    categories: [],
    auth : false
}

export type inventoryActions = 
{type : 'authenticate'} |
{type : 'endSession'} |
{type : 'createProduct', payload:{'product' : product}} |
{type : 'editProduct', payload:{'product' : product, 'id' : string}} |
{type : 'increaseQuantity', payload:{'id' : string}} |
{type : 'decreaseQuantity', payload:{'id' : string}} |
{type : 'createCategory', payload:{'category' : category}} |
{type : 'editCategory', payload:{'category' : category}} |
{type : 'seedData', payload:{'categories' : category[], products : product[]}}


export const inventoryReducer = (

    state : inventorystate = initialstate,
    actions : inventoryActions

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => {

    if(actions.type === 'authenticate'){

        return{
            ...state,
            auth : true
        }
    }
    if(actions.type === 'endSession'){

      return{
          ...state,
          auth : false
      }
  }
    if(actions.type === 'createProduct'){

        const currentDate = new Date();

        const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getFullYear()).slice(-2)}`;

        const categoryname = state.categories.find( item => item.categoryId === actions.payload.product.categoryId)

        const product = {
            ...actions.payload.product,
            categoryName: categoryname?.categoryName,
            createdAt : formattedDate
        }
        return{
            ...state,
            products : [...state.products, product]
        }
    }
    if (actions.type === 'editProduct') {
        const currentDate = new Date();
      
        const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getFullYear()).slice(-2)}`;

        const categoryname = state.categories.find( item => item.categoryId === actions.payload.product.categoryId)
      
        return {
          ...state,
          products: state.products.map(product =>
            product.id !== actions.payload.id
              ? product
              : {
                  ...product,
                  ...actions.payload.product, 
                  editedAt: formattedDate, 
                  categoryName: categoryname?.categoryName
                }
          )
        };
      }
      if (actions.type === 'increaseQuantity') {
        const currentDate = new Date();
      
        const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getFullYear()).slice(-2)}`;
      
        return {
          ...state,
          products: state.products.map(product => product.id !== actions.payload.id ? product : {
                  ...product,
                  quantity: +product.quantity + 1,
                  editedAt: formattedDate, 
                  
                }
          )
        };
      }
      if (actions.type === 'decreaseQuantity') {
        const currentDate = new Date();
      
        const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getFullYear()).slice(-2)}`;
      
        return {
          ...state,
          products: state.products.map(product =>
            product.id !== actions.payload.id
              ? product
              : {
                  ...product,
                  quantity: +product.quantity - 1,
                  editedAt: formattedDate, 
                  
                }
          )
        };
      }
      if(actions.type === 'createCategory'){

        return {
          ...state,
          categories : [...state.categories, actions.payload.category]
        }
      }
      if(actions.type === 'editCategory'){

        return {
          ...state,
          products: state.products.map(product => product.categoryId !== actions.payload.category.categoryId ? product : {...product, categoryName : actions.payload.category.categoryName}),
          categories: state.categories.map( category => category.categoryId !== actions.payload.category.categoryId ? category : {...category, ...actions.payload.category})
        }
      }
      if(actions.type === 'seedData'){

        
        return {
          ...state,
          categories : actions.payload.categories,
          products : actions.payload.products
        }
      }

    return state
}