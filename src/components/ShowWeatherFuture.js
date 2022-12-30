import styles from "./ShowWeatherFuture.module.css"

const ShowWeatherFuture = ({infos}) => {
    let imgSrc = `http://openweathermap.org/img/wn/${infos.weather[0].icon}.png`




    let day = infos.dt_txt.split(' ')
    let dayFormat = day[0]
    let newDay = `${dayFormat[8]}${dayFormat[9]} / ${dayFormat[5]}${dayFormat[6]} `
    

    return(
        <div className={styles.card}>
            <img src={imgSrc} alt='iconTemp' />
            <p>{infos.weather[0].description}</p>
            <p>{newDay}</p>
            <p>{Math.round(infos.main.temp)} °C</p>

        </div>
        
    )
}

export default ShowWeatherFuture