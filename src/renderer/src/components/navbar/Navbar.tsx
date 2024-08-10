import { ToastContainer } from 'react-toastify'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { useInventory } from '@renderer/hooks/useInventory';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Navbar() {
  const {state, dispatch} = useInventory()

  return (
    <>
      <ToastContainer></ToastContainer>
      {state.auth ? (
        <nav className={style.navbar}>
        <ul>
          <li><Link to="/1">Inventario</Link></li>
          <li><Link to="/create">Crear Producto</Link></li>
        </ul>
        <div className={style.admin} onClick={()=>dispatch({type : 'endSession'})} >Cerrar Sesion</div>
      </nav>
      ): (
        <nav className={style.navbar}>
        
        <ul>
          <li><Link to="/1">Inventario</Link></li>
        </ul>
        <Link className={style.admin} to="/auth">Admin</Link>
      </nav>

      )}
    </>
  )
}
