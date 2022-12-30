import styles from "./ShowWeatherNow.module.css"

const ShowWeatherNow = ({ infos }) => {
    let imgSrc = `http://openweathermap.org/img/wn/${infos.weather[0].icon}.png`

    return (
        <div className={styles.infos}>
            <p className={styles.infosCity}>
                <span>{infos.name}</span> - <span>{infos.sys.country}</span>
            </p>
            <p className={styles.extra}>
                <span>Agora: </span> <br />
                <span>Umidade: {infos.main.humidity} % </span>
            </p>
            <p>{infos.dt_txt}</p>
            <p className={styles.temp}> {Math.round(infos.main.temp)}°C </p>
            <p className={styles.climate}>
                <span>{infos.weather[0].description}</span>
                <img src={imgSrc} alt={`imagem do clima ${infos.weather[0].description}`} />
            </p>
        </div>
    )
}

export default ShowWeatherNow
