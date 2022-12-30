import styles from "./Loading.module.css"

const Loading = () => {
    return (
        <div className={styles.loadContainer}>
            <div className={styles.loadBorder}></div>
            <div className={styles.load}></div>
        </div>
        
    )
}

export default Loading