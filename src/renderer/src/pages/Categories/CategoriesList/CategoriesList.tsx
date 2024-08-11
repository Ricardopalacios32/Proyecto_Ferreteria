/* eslint-disable @typescript-eslint/explicit-function-return-type */
import CategoryTable from '@renderer/components/Categories/CategoryTable/CategoryTable'
import Navbar from '@renderer/components/navbar/Navbar'
import { useInventory } from '@renderer/hooks/useInventory';
import styles from './CategoriesList.module.css'

export default function CategoriesList() {

  const { state } = useInventory();
  


  
  const categories = state.categories

  if(state.categories.length === 0) return (
    <div className={styles.categorytablecont}>
      <Navbar />
      <input type="file" name="" id="" />
    </div>
    
  )

  return (
    <div className={styles.categorytablecont}>
      <Navbar />  
      <CategoryTable 
        categories={categories}
      />
    </div>
  )
}
