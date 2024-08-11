/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { product } from "@renderer/types"
import styles from './ProductForm.module.css'
import { useInventory } from "@renderer/hooks/useInventory"


type ProductFormProps = {
    product? : product
    handleChange : (e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>)=>void
}

export default function ProductForm({product, handleChange} : ProductFormProps) {

  const {state} = useInventory()

  return (
    <>
        {!product ? (
          <div className={styles.div}>
            <label htmlFor="id">ID</label>
            <input 
              type={`${!product ? 'text' : 'hidden'}`} 
              className=""
              id="id"
              onChange={handleChange}
              
            />
          </div>
        ) : <></>}
        
        <div className={styles.div}>
          <label htmlFor="productName">Nombre</label>
          <input 
            type="text" 
            className=""
            id="productName"
            onChange={handleChange}
            defaultValue={product?.productName}
          />
        </div>
        <div className={styles.div}>
          <label htmlFor="productBuyPrice">Precio de Compra</label>
          <input 
            type="number" 
            className=""
            id="productBuyPrice"
            onChange={handleChange}
            defaultValue={product?.productBuyPrice}
          />
        </div>
        <div>
          <label htmlFor="productSellPrice">Precio de Venta</label>
          <input 
            type="number" 
            className=""
            id="productSellPrice"
            onChange={handleChange}
            defaultValue={product?.productSellPrice}
          />
        </div>
        <div>
          <label htmlFor="quantity">Cantidad</label>
          <input 
            type="number" 
            className=""
            id="quantity"
            onChange={handleChange}
            defaultValue={product?.quantity}
          />
        </div>
        <div>
          <label htmlFor="categoryId">Categoria</label>
          <select 
            name="" 
            id="categoryId"
            onChange={handleChange}
            defaultValue={product?.categoryId}
          >
            <option value="">--Seleccione una categoria--</option>
            {state.categories.map((category) => (
            <option key={category.categoryId} value={category.categoryId}>
              {category.categoryName}
            </option>
        ))}
          </select>
        </div>
        
        
      
    </>
  )
}
