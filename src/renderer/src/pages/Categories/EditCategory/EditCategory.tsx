/* eslint-disable @typescript-eslint/explicit-function-return-type */

import EditCategoryForm from "@renderer/components/Categories/EditCategoryForm/EditCategoryForm";
import Navbar from "@renderer/components/navbar/Navbar";
import styles from './EditCategory.module.css'


export default function EditCategory() {
  return (
    <div className={styles.editcategoryformbody}>
        <Navbar/>
        <EditCategoryForm/>
    </div>
  )
}
