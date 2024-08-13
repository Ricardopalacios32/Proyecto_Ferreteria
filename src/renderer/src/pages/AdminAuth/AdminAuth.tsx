/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Navbar from '@renderer/components/navbar/Navbar'
import AdminForm from '@renderer/components/ui/AdminForm/AdminForm'
import GoBackButton from '@renderer/components/ui/GoBackButton/GoBackButton'
import styles from './AdminAuth.module.css'


export default function AdminAuth() {
  return (
    <div className={styles.adminAuthcont}>
        <Navbar/>
        
        <GoBackButton/>
        <p>Ingrese La Contraseña de Autenticacion</p>
        <AdminForm/>
    </div>
  )
}
