/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import { useInventory } from "@renderer/hooks/useInventory";
import style from './AddProductForm.module.css'

import { product } from "@renderer/types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoBackButton from "@renderer/components/ui/GoBackButton/GoBackButton";


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function AddProductForm() {

  const navigate = useNavigate()

  const {state, dispatch} = useInventory()

  if(state.auth === false){
    
    navigate('/1')
    return
  }

  const [product, setProduct] = useState<product>({
    id: '',
    productName : '',
    productBuyPrice : 0,
    productSellPrice : 0,
    quantity: 0,
    categoryId: '',
    categoryName : 'tornillos',
  })

  const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if (Object.values(product).some(value => value === '')) {
      toast.error("Todos Los Campos Son Requeridos")
      return
    }
    if(state.products.find((item) => item.id === product.id)){
      toast.error("El ID ya existe")

      return
    }
  
    dispatch({type : 'createProduct', payload : {product : product}})

    toast.success("Creado Correctamente")

    setTimeout(() => {
      navigate('/1');
    }, 3000);

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
      <GoBackButton/>
      <form className={style.productform} action="" onSubmit={handleSubmit}>
        <ProductForm
          handleChange = {handleChange}
        />
        <input type="submit" value="Registrar Producto"/>
        
      </form>
    </>
  )
}
