/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Link } from 'react-router-dom'
import styles from './InventoryTable.module.css'
import { productWithDates } from '@renderer/types'
import { useInventory } from '@renderer/hooks/useInventory'


type InventoryTableProps = {
  products : productWithDates[]
}

export default function InventoryTable({products} : InventoryTableProps) {

  const {state, dispatch} = useInventory()

  const increaseQuantity = (id : productWithDates["id"]) =>{

    dispatch({type : 'increaseQuantity', payload : {id : id} })
  }

  const decreaseQuantity = (id : productWithDates["id"]) =>{

    dispatch({type : 'decreaseQuantity', payload : {id : id} })
  }

 

  return (
    <div className={styles.container}>
      <div className={styles.flowRoot}>
        <div className={styles.tableWrapper}>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Producto</th>
                  <th>Precio de Compra</th>
                  <th>Precio de Venta</th>
                  <th>Cantidad</th>
                  <th>Categoría</th>
                  <th>Creado el</th>
                  <th>Editado el</th>
                  {state.auth && (
                    <th className={styles.actions}>Acciones</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.productName}</td>
                    <td>{product.productBuyPrice}</td>
                    <td>{product.productSellPrice}</td>
                    {state.auth ? (
                      <td className={styles.quantityContainer}>
                      <button onClick={()=> decreaseQuantity(product.id)} className={styles.quantityButton + ' ' + styles.decrementButton}>-</button>
                      <p className={styles.quantityInput}>{product.quantity}</p> 
                      <button onClick={()=> increaseQuantity(product.id)} className={styles.quantityButton + ' ' + styles.incrementButton}>+</button>
                    </td>
                    ):<td>{product.quantity}</td>}
                    
                    <td>{product.categoryName}</td>
                    <td>{product.createdAt}</td>
                    <td>{product.editedAt}</td>
                    {state.auth && (
                      <td className={styles.actions}>
                        <Link to={`/edit/${product.id}`} className={styles.link}>
                          Editar
                        </Link>
                      </td>
                    )}
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
