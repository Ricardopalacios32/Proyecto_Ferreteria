/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { category } from "@renderer/types"
import styles from './CategoryForm.module.css'


type CategoryFormProps = {
    category? : category
    handleChange : (e : React.ChangeEvent<HTMLInputElement>)=>void
}

export default function CategoryForm({category, handleChange} : CategoryFormProps) {
  return (
    <>
      
        <div className={styles.div}>
          <label htmlFor="categoryName">Nombre De La Categoria</label>
          <input 
            type="text" 
            className=""
            id="categoryName"
            onChange={handleChange}
            defaultValue={category?.categoryName}
          />
        </div>
    </>
  )
}
