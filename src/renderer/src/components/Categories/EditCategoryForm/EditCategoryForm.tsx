/* eslint-disable @typescript-eslint/explicit-function-return-type */

import GoBackButton from "@renderer/components/ui/GoBackButton/GoBackButton";
import CategoryForm from "../CategoryForm/CategoryForm";
import style from "./EditCategoryForm.module.css"

import { toast } from "react-toastify";
import { category } from "@renderer/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useInventory } from "@renderer/hooks/useInventory";


export default function EditCategoryForm() {

    const navigate = useNavigate()

  const {id} = useParams()

  const {state, dispatch} = useInventory()

  const editCategory = state.categories.find(item => item.categoryId === id);


  useEffect(()=>{

    if(!id || !editCategory){
      navigate('/')
      return
    }

  })

  const [category, setCategory] = useState<category>({
    categoryId: id!,
    categoryName : editCategory!.categoryName,
  })

  const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if (Object.values(category).some(value => value === '')) {
      toast.error("Todos Los Campos Son Requeridos")
      return
    }
    if(!state.categories.find((item) => item.categoryId === category.categoryId)){
      toast.error("El ID ya existe")

      return
    }
    
    dispatch({type : 'editCategory', payload : {category : category}})

    toast.success("Editado Correctamente")

    setTimeout(() => {
      navigate('/category');
    }, 3000);

  }

  const handleChange = (e :  React.ChangeEvent<HTMLInputElement>) =>{
    
    e.preventDefault()

    setCategory({
      ...category,
      categoryName : e.target.value 
    })

}

  return (
    <>
      <GoBackButton/>
      <form className={style.categoryform} action="" onSubmit={handleSubmit}>
        <CategoryForm
          category={category}
          handleChange = {handleChange}
        />
        <input type="submit" value="Guardar Cambios"/>
        
      </form>
    </>
  )
}
