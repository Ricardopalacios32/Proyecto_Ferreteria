/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import { useInventory } from "@renderer/hooks/useInventory";
import style from './EditProductForm.module.css'

import { product } from "@renderer/types";
import { useNavigate, useParams } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function EditProductForm() {

  const navigate = useNavigate()

  const {id} = useParams()

  const {state, dispatch} = useInventory()

  const editProduct = state.products.find(product => product.id === id);

  if(!id || !editProduct){
    navigate('/')
    return
  }

  const [product, setProduct] = useState<product>({
    productName : editProduct.productName,
    productBuyPrice : editProduct.productBuyPrice,
    productSellPrice : editProduct.productSellPrice,
    quantity: editProduct.quantity,
    categoryId: editProduct.categoryId,
    categoryName : editProduct.categoryName,
  })

  const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    

    dispatch({type : 'editProduct', payload : {product : product, id : id}})

    navigate('/')

  }
  
  const handleChange = (e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) =>{
      const isnumber = ['category', 'value'].includes(e.target.id)

      setProduct({
        ...product,
        [e.target.id] : isnumber? +e.target.value : e.target.value
      })
  }

  return (
    <>
      <form className={style.productform} action="" onSubmit={handleSubmit}>
        <ProductForm
          product={editProduct}
          handleChange = {handleChange}
        />
        <input type="submit" value="Guardar Cambios"/>
        
      </form>
    </>
  )
}
