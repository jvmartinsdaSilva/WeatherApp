import styles from "./Menu.module.css"
import { useState } from "react"

const Menu = ({handleChange}) => {
    const [city, setCity] = useState('')

    const searchCity = () => {
        if(city === ''){
            return false
        }
              
        handleChange(city)
    }

    return (
        <div className={styles.menu}>
            <input type="text" placeholder="Digite o nome da sua cidade" id="iCity" onChange={(e) => setCity(e.target.value)} />
            <button onClick={searchCity}>🔍</button>
        </div>
    )

}

export default Menu