/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { useState } from 'react'
import styles from './AdminForm.module.css'
import { toast } from 'react-toastify'
import { useInventory } from '@renderer/hooks/useInventory'
import { useNavigate } from 'react-router-dom'

export default function AdminForm() {

    const {dispatch} = useInventory()

    const navigate = useNavigate()

    const [user, setUser] = useState({
      username : '',
      password : ''
    })

    const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
    
        if (user.password === '' || user.username === '') {
          toast.error("Todos Los Campos Son Requeridos")
          return
        }

        
        if (user.password !== import.meta.env.VITE_PASSWORD_ADMIN && user.username !== import.meta.env.RENDERER_VITE_USER){

            toast.error("Contraseña incorrecta")
            return
        }
        
        
    
        setTimeout(() => {
          
          toast.success("Autenticado Correctamente")
        }, 500);
    
        dispatch({type : 'authenticate'})
        navigate('/1');
      }
      
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setUser({
          ...user,
          [e.target.id] : e.target.value
        })

        console.log(user)
    }


  return (
    <form className={styles.adminFormcont} onSubmit={handleSubmit} >
        <div className={styles.div}>
            <label htmlFor="username">Usuario</label>
            <input 
              type={"text"} 
              className=""
              id="username"
              defaultValue={user.username}
              onChange={handleChange}
            />
        </div>
        <div className={styles.div}>
            <label htmlFor="password">Contraseña</label>
            <input 
              type={"text"} 
              className=""
              id="password"
              defaultValue={user.password}
              onChange={handleChange}
            />
        </div>
        
        <input type="submit" value="Autenticar"/>
    </form>
  )
}
