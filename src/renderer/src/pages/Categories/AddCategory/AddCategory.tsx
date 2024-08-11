/* eslint-disable @typescript-eslint/explicit-function-return-type */

import AddCategoryForm from "@renderer/components/Categories/AddCategoryForm/AddCategoryForm";
import Navbar from "@renderer/components/navbar/Navbar";

import styles from './AddCategory.module.css'


export default function AddCategory() {
  return (
    <div className={styles.addcategoryformbody}>
      <Navbar/>
      <AddCategoryForm/>
    </div>
  )
}
