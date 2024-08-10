/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { product } from "@renderer/types"
import styles from './ProductForm.module.css'


type ProductFormProps = {
    product? : product
    handleChange : (e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>)=>void
}

const categories = [
  { id: 1, name: "Herramientas Manuales" },
  { id: 2, name: "Herramientas Eléctricas" },
  { id: 3, name: "Tornillería" },
  { id: 4, name: "Fijaciones" },
  { id: 5, name: "Pinturas y Acabados" },
  { id: 6, name: "Materiales de Construcción" },
  { id: 7, name: "Fontanería" },
  { id: 8, name: "Electricidad" },
  { id: 9, name: "Iluminación" },
  { id: 10, name: "Adhesivos y Selladores" },
  { id: 11, name: "Seguridad Industrial" },
  { id: 12, name: "Cerrajería" },
  { id: 13, name: "Ferretería Decorativa" },
  { id: 14, name: "Jardinería" },
  { id: 15, name: "Cerraduras y Candados" },
  { id: 16, name: "Automatización" },
  { id: 17, name: "Calefacción y Climatización" },
  { id: 18, name: "Accesorios de Baño" },
  { id: 19, name: "Materiales de Soldadura" },
  { id: 20, name: "Accesorios para Muebles" }
];


export default function ProductForm({product, handleChange} : ProductFormProps) {

  

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
            {categories.map((category) => (
            <option key={category.id} value={JSON.stringify(category)}>
              {category.name}
            </option>
        ))}
          </select>
        </div>
        
        
      
    </>
  )
}
