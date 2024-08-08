/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { product } from "@renderer/types"
import styles from './ProductForm.module.css'


type ProductFormProps = {
    product? : product
    handleChange : (e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>)=>void
}


export default function ProductForm({product, handleChange} : ProductFormProps) {

  

  return (
    <>
      
        <div className={styles.div}>
          <label htmlFor="name">Nombre</label>
          <input 
            type="text" 
            className=""
            id="productName"
            onChange={handleChange}
            defaultValue={product?.productName}
          />
        </div>
        <div className={styles.div}>
          <label htmlFor="buyprice">Precio de Compra</label>
          <input 
            type="number" 
            className=""
            id="productBuyPrice"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sellprice">Precio de Venta</label>
          <input 
            type="number" 
            className=""
            id="productSellPrice"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Cantidad</label>
          <input 
            type="number" 
            className=""
            id="quantity"
            
          />
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <select 
            name="" 
            id="categoryId"
            onChange={handleChange}
          >
            <option value="">--Seleccione una categoria--</option>
            <option value="1">Tornillos</option>
          </select>
        </div>
        
        
      
    </>
  )
}
