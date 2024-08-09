/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import { useInventory } from "@renderer/hooks/useInventory";
import style from './AddProductForm.module.css'

import { product } from "@renderer/types";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function AddProductForm() {

  const navigate = useNavigate()

  const [product, setProduct] = useState<product>({
    productName : '',
    productBuyPrice : 0,
    productSellPrice : 0,
    quantity: 0,
    categoryId: '',
    categoryName : 'tornillos',
  })

  const {dispatch} = useInventory()



  const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    dispatch({type : 'createProduct', payload : {product : product}})

    navigate('/1')

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
          handleChange = {handleChange}
        />
        <input type="submit" value="Registrar Producto"/>
        
      </form>
    </>
  )
}
