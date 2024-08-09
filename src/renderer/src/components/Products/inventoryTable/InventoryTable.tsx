/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Link } from 'react-router-dom'
import styles from './InventoryTable.module.css'
import { useInventory } from '@renderer/hooks/useInventory'

export default function InventoryTable() {

    const {state} = useInventory()

  return (
    <div className={styles.container}>
      <div className={styles.flowRoot}>
        <div className={styles.tableWrapper}>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio de Compra</th>
                  <th>Precio de Venta</th>
                  <th>Cantidad</th>
                  <th>Categoría</th>
                  <th>Creado el</th>
                  <th>Editado el</th>
                  <th className={styles.actions}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {state.products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.productName}</td>
                    <td>{product.productBuyPrice}</td>
                    <td>{product.productSellPrice}</td>
                    <td>{product.quantity}</td>
                    <td>{product.categoryName}</td>
                    <td>{product.createdAt}</td>
                    <td>{product.editedAt}</td> 
                    <td className={styles.actions}>
                    <Link to={`/edit/${product.id}`} className={styles.link}>
                      Editar
                    </Link>
                    </td>
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
