import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul>
        <li><Link to="/">Inventario</Link></li>
        <li><Link to="/create">Create Product</Link></li>
      </ul>
      <Link className={style.admin} to="/auth">Admin</Link>
    </nav>
  )
}
