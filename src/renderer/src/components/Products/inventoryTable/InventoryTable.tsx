/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import styles from './InventoryTable.module.css'
import { useInventory } from '@renderer/hooks/useInventory'

export default function InventoryTable() {

    const {state, dispatch} = useInventory()

    console.log(state.products)

  return (
    <div className={styles.container}>
      <div className={styles.flowRoot}>
        <div className={styles.tableWrapper}>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Categoría</th>
                  <th className={styles.actions}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {state.products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.productName}</td>
                    <td>{product.productBuyPrice}</td>
                    <td>{product.productSellPrice}</td>
                    <td className={styles.actions}>
                      <a href={`/admin/products/${product.id}/edit`} className={styles.link}>
                        Editar
                      </a>
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
