/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { useState } from 'react'
import styles from './AdminForm.module.css'
import { toast } from 'react-toastify'
import { useInventory } from '@renderer/hooks/useInventory'
import { useNavigate } from 'react-router-dom'

export default function AdminForm() {

    const {dispatch} = useInventory()

    const navigate = useNavigate()

    const [password, setPassword] = useState('')

    const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
    
        if (password === '') {
          toast.error("Todos Los Campos Son Requeridos")
          return
        }

        // @ts-ignore (define in dts)
        if (password !== window.env.VITE_PASSWORD_ADMIN){
            toast.error("Contraseña incorrecta")
            return
        }
        
        toast.success("Autenticado Correctamente")
    
        setTimeout(() => {
          dispatch({type : 'authenticate'})
          navigate('/1');
        }, 3000);
    
      }
      
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }


  return (
    <form className={styles.adminFormcont} onSubmit={handleSubmit} >
        <div className={styles.div}>
            <label htmlFor="password">Contraseña</label>
            <input 
              type={"text"} 
              className=""
              id="pasword"
              defaultValue={password}
              onChange={handleChange}
            />
        </div>
        <input type="submit" value="Autenticar"/>
    </form>
  )
}
