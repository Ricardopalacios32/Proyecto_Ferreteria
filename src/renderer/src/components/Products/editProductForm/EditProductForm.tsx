/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import { useInventory } from "@renderer/hooks/useInventory";
import style from './EditProductForm.module.css'

import { product } from "@renderer/types";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import GoBackButton from "@renderer/components/ui/GoBackButton/GoBackButton";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function EditProductForm() {

  const navigate = useNavigate()

  const {id} = useParams()

  const {state, dispatch} = useInventory()

  const editProduct = state.products.find(product => product.id === id);

  useEffect(()=>{

    if(!id || !editProduct){
      navigate('/')
      
    }

  })

  const [product, setProduct] = useState<product>({
    id: id!,
    productName : editProduct!.productName,
    productBuyPrice : editProduct!.productBuyPrice,
    productSellPrice : editProduct!.productSellPrice,
    quantity: editProduct!.quantity,
    categoryId: editProduct!.categoryId,
    categoryName : editProduct!.categoryName,
  })

  const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if (Object.values(product).some(value => value === '')) {
      toast.error("Todos Los Campos Son Requeridos")
      return
    }

  

    if(!state.products.find((item) => item.id === product.id)){
      toast.error("El ID ya existe")

      return
    }
    

    dispatch({type : 'editProduct', payload : {product : product, id : id!}})

    toast.success("Editado Correctamente")

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
          product={editProduct}
          handleChange = {handleChange}
        />
        <input type="submit" value="Guardar Cambios"/>
        
      </form>
    </>
  )
}
