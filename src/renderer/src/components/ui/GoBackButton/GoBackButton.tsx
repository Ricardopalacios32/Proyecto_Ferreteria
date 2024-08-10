/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Link } from 'react-router-dom'
import styles from './GoBackButtom.module.css'

export default function GoBackButton() {
  return (
    <Link to='/1'  className={styles.goBackbuttom}>Volver</Link>
  )
}
