/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { category } from '@renderer/types'
import styles from './CategoryTable.module.css'
import { useInventory } from '@renderer/hooks/useInventory'
import { Link } from 'react-router-dom'

type CategoryTableProps = {
    categories : category[]
}

export default function CategoryTable({categories} : CategoryTableProps) {

    const {state } = useInventory()

  console.log(state.categories)

  return (
    <div className={styles.container}>
      <div className={styles.flowRoot}>
        <div className={styles.tableWrapper}>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>             
                  <th>Categoría</th>
                  {state.auth && (
                    <th className={styles.actions}>Acciones</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.categoryId}>
                    <td>{category.categoryId}</td>
                    <td>{category.categoryName}</td>
                    
                    
                    {state.auth && (
                      <td className={styles.actions}>
                        <Link to={`/category/edit/${category.categoryId}`} className={styles.link}>
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
