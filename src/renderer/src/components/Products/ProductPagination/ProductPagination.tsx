/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Link } from "react-router-dom"
import styles from './ProductPagination.module.css'

type ProductPaginationProps = {
    page: number
    totalpages: number
}

export default function ProductPagination({page, totalpages} : ProductPaginationProps) {

    const pages = Array.from({length: totalpages}, (_, i) => i+1)


  return (
    <nav className={styles.nav}>
      {page > 1 && (
        <Link
          to={`/${page - 1}`}
          className={styles.link}
        >
          &laquo;
        </Link>

)}

      {pages.map(currentpage => (
        <Link
          key={currentpage}
          to={`/${currentpage}`}
          className={`${styles.link} ${page === currentpage ? styles.active : ''}`}
        >
          {currentpage}
        </Link>
      ))}

      {page < totalpages && (
        <Link
          to={`/${page + 1}`}
          className={styles.link}
        >
          &raquo;
        </Link>
      )}
    </nav>
  )
}
