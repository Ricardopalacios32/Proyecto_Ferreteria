import Navbar from "@renderer/components/navbar/Navbar"
import InventoryTable from "@renderer/components/Products/inventoryTable/InventoryTable"
import styles from './ProductTable.module.css'


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function ProductTable() {
  return (
    <div className={styles.producttablecont}>
        <Navbar/>
        <InventoryTable/>
    </div>
  )
}
