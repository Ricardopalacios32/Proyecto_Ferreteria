/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Navbar from '@renderer/components/navbar/Navbar'
import styles from './DataForm.module.css'
import { useInventory } from '@renderer/hooks/useInventory'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



export default function DataForm() {

    

    const {state, dispatch} = useInventory()

    const handleMigrate = async (e : React.ChangeEvent<HTMLInputElement>)=>{

        const file = e.target.files?.[0]

        if (file) {
            try {
                const fileContent = await new Promise<string>((resolve, reject) => {
                    const reader = new FileReader()
                    reader.onload = (event) => {
                        
                        resolve(event.target?.result as string)
                        
                    }
                    reader.onerror = (error) => {
                        reject(error)
                    }
                    reader.readAsText(file)
                })

                const [categoriesJSON, productsJSON] = fileContent.split(']');
    
                const categories = JSON.parse(categoriesJSON+']');
            
                const products = JSON.parse( productsJSON+']');
            
                if(categories && products){
                    setTimeout(() => {
                        toast.success("Inventario Cargado Correctamente")
                    }, 100);
                    
                    dispatch({type : 'seedData', payload : {categories : categories, products : products}})

                   
                }
                else{
                    toast.error('Archivo no Valido')
                }
                
            } catch (error) {
                console.log(error)
                toast.error('Archivo no Valido')
            }
        }
        
        
    
    }

  return (
    <div className={styles.dataformcont}>
      <Navbar />
      <p className={styles.title}>No Hay un inventario cargado por favor ingrese el archivo de Inventario</p>
      <input onChange={handleMigrate} type="file" name="" id="" />
      {state.auth && (<p>O cree uno <Link to="/create" className={styles.createbutton}>Nuevo</Link></p>)}

    </div>
  )
}
