/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Navbar from "@renderer/components/navbar/Navbar";
import InventoryTable from "@renderer/components/Products/inventoryTable/InventoryTable";
import styles from './ProductTable.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { useInventory } from "@renderer/hooks/useInventory";
import ProductPagination from "@renderer/components/Products/ProductPagination/ProductPagination";
import { useEffect } from "react";
import ProductSearchForm from "@renderer/components/Products/ProductSearchForm/ProductSearchForm";

export default function ProductTable() {
  
  const navigate = useNavigate();
  const { page } = useParams();
  const pageNumber = parseInt(page!, 10);
  const pagesize = 10;
  
  useEffect(()=>{

    if (!pageNumber || pageNumber < 1) {
      
      navigate('/1');
      return
    }

  })

  const { state } = useInventory();
  const totalproducts = state.products.length;
  const totalpages = Math.ceil(totalproducts / pagesize);

  const skip = (pageNumber - 1) * pagesize
  const products = state.products.slice(skip, skip + pagesize)

  if(state.products.length === 0) return (
    <div className={styles.producttablecont}>
      <Navbar />
      <input type="file" name="" id="" />
    </div>
    
  )
  
  return (
    <div className={styles.producttablecont}>
      <Navbar />
      <ProductSearchForm/>
      <InventoryTable 
        products={products}
      />
      <ProductPagination
        page={pageNumber}
        totalpages={totalpages}
      />
    </div>
  );
}