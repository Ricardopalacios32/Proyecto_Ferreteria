/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './ProductSearchForm.module.css'


export default function ProductSearchForm() {

    const navigate = useNavigate()

    const [search, setSearch] = useState('')

    const handleSearch = (e : React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()
        navigate(`/search/${search}`)
    }

    const handleChange = ( e : React.ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value)
    }

  return (
    <form className={styles.searchformcont} onSubmit={handleSearch}>
        <input type="text" onChange={handleChange} placeholder="Buscar Producto"/>
        <input type="submit" value='Buscar' />
    </form>
  )
}
