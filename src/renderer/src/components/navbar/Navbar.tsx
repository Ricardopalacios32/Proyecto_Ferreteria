import { ToastContainer } from 'react-toastify'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Navbar() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <nav className={style.navbar}>
        <ul>
          <li><Link to="/1">Inventario</Link></li>
          <li><Link to="/create">Crear Producto</Link></li>
        </ul>
        <Link className={style.admin} to="/auth">Admin</Link>
      </nav>
    </>
  )
}
