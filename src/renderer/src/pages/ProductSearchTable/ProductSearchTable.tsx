/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Navbar from "@renderer/components/navbar/Navbar";
import InventoryTable from "@renderer/components/Products/inventoryTable/InventoryTable";
import styles from './ProductSearchTable.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { useInventory } from "@renderer/hooks/useInventory";
import { useEffect } from "react";
import GoBackButton from "@renderer/components/ui/GoBackButton/GoBackButton";

export default function ProductSearchTable() {
    const navigate = useNavigate();
    const { name } = useParams();
    
    useEffect(()=>{
  
      if (!name) {
        
        navigate('/1');
        return
      }
  
    })
  
    const { state } = useInventory();
    const normalizeString = (string : string)=> {
      return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    }
    
    const products = state.products.filter(product => normalizeString(product.productName).includes(normalizeString(name || '')));
    return (
      <div className={styles.producttablecont}>
        <Navbar />
        <GoBackButton/>
        <InventoryTable 
          products={products}
        />
      </div>
    );
}
