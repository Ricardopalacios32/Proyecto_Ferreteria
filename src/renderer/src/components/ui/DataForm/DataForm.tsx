/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Navbar from '@renderer/components/navbar/Navbar'
import styles from './DataForm.module.css'
import { useInventory } from '@renderer/hooks/useInventory'



export default function DataForm() {

    const {dispatch} = useInventory()

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
                    dispatch({type : 'seedData', payload : {categories : categories, products : products}})
                }
                
            } catch (error) {
                console.log(error)
            }
        }
        
        
    
    }

  return (
    <div className={styles.dataformcont}>
      <Navbar />
      <input onChange={handleMigrate} type="file" name="" id="" />
    </div>
  )
}
