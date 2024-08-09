/* eslint-disable @typescript-eslint/explicit-function-return-type */

import Navbar from "@renderer/components/navbar/Navbar"
import EditProductForm from "@renderer/components/Products/editProductForm/EditProductForm"
import styles from './EditProduct.module.css'



export default function EditProduct() {
   
  return (
    <div className={styles.editproductformbody}>
        <Navbar/>
        <EditProductForm/>
    </div>
  )
}
