/* eslint-disable @typescript-eslint/explicit-function-return-type */

import GoBackButton from "@renderer/components/ui/GoBackButton/GoBackButton"
import { useInventory } from "@renderer/hooks/useInventory"
import { category } from "@renderer/types"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { v4 as uuid4 } from "uuid"
import CategoryForm from "../CategoryForm/CategoryForm"
import styles from './AddCategoryForm.module.css'


export default function AddCategoryForm() {


  const navigate = useNavigate()

  const {state, dispatch} = useInventory()

  if(state.auth === false){
    
    navigate('/1')
    return
  }

  const [category, setCategory] = useState<category>({
    categoryId: uuid4(),
    categoryName : '',
  })

  const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if (category.categoryName === '') {
      toast.error("Todos Los Campos Son Requeridos")
      return
    }
    if(state.categories.find((item) => item.categoryId === category.categoryId)){
      toast.error("El ID ya existe")
      return
    }
  
    dispatch({type : 'createCategory', payload : {category : category}})

    setTimeout(() => {
      toast.success("Creado Correctamente")
    }, 500);

    navigate('/category');

  }
  
  const handleChange = (e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) =>{
      const isnumber = ['category', 'value'].includes(e.target.id)

      setCategory({
        ...category,
        [e.target.id] : isnumber? +e.target.value : e.target.value
      })
  }

  return (
    <>
      <GoBackButton/>
      <form className={styles.categoryform} action="" onSubmit={handleSubmit}>
        <CategoryForm
          handleChange = {handleChange}
        />
        <input type="submit" value="Registrar Categoria"/>
        
      </form>
    </>
  )
}
