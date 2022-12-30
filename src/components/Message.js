import styles from "./Message.module.css"

const Message = ({txt}) => {
    return(
        <div className={styles.message}>
            <p>{txt}</p>
        </div>
    )
}

export default  Message