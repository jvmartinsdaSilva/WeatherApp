
import './app.css';

import { useState } from 'react'
import Menu from './components/Menu';
import Message from './components/Message';
import ShowWeatherNow from './components/ShowWeatherNow';
import ShowWeatherFuture from './components/ShowWeatherFuture';
import Loading from './components/Loading';

function App() {
  const [messageTxt, setMessageTxt] = useState('Digite uma cidade para consultar o clima')
  const [weatherNow, setWeatherNow] = useState(null)
  const [weatherFutures, setWeatherFutures] = useState([])
  const [loadingOn, setLoadingOn] = useState(false)


  const getWeathers = (city) => {
    setWeatherNow(null)
    setWeatherFutures([])
    setMessageTxt('')
    setLoadingOn(true)

    setTimeout(() => {
      getWeatherNow(city)
      getWeatherFutures(city)
    }, 400)

  }

  const getWeatherNow = async (city) => {
    const key = '5c4aaf4971193222a9059f1f935b1020'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${key}&lang=pt_br`

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === '404') {
          setMessageTxt('Cidade não encontrada')
          setWeatherNow(null)
          return false
        }
        setWeatherNow(data)
      })
      .catch((err) => console.log('erro' + err))
  }


  const getWeatherFutures = async (city) => {
    const key = '5c4aaf4971193222a9059f1f935b1020'
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=Metric&appid=${key}&lang=pt_br`

    await fetch(url)
      .then((res) => res.json())
      .then((data) => filterData(data))
      .catch((err) => console.log('erro' + err))



    setLoadingOn(false)
  }

  const filterData = (data) => {
    setWeatherFutures([])
    const datas = data.list
    const daysFuture = []

    datas.map((item) => {
      let day = item.dt_txt
      let dayFormat = day.split(" ")

      if (!daysFuture.includes(dayFormat[0])) {
        daysFuture.push(dayFormat[0])
        setWeatherFutures((preventState) => [...preventState, item])
      }
      return item
    })
  }



  return (
    <div className="container">
      <h1>WEATHER APP</h1>
      <Menu handleChange={getWeathers} />
      {loadingOn && (
        <Loading />
      )}
      {weatherNow === null ? (
        <Message txt={messageTxt} />
      ) : (
        <ShowWeatherNow infos={weatherNow} />
      )}

      <div className='tempFuture'>
        {weatherFutures.length > 0 && (
          weatherFutures.map((weather) => (
            <ShowWeatherFuture infos={weather} key={weather.dt} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
