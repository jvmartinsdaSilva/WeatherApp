import styles from "./Loading.module.css"

const Loading = () => {
    let imgSrc = 'http://openweathermap.org/img/wn/04n.png'

    return (
        <div className={styles.loadContainer}>
            <div className={styles.loadBorder}>
                <img src={imgSrc} alt='Loading'/>
            </div>
            <div className={styles.load}></div>
        </div>
        
    )
}

export default Loading