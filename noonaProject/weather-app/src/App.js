import { useEffect, useState, CSSProperties } from 'react';
import './App.css';
import MainBox from './component/MainBox';
import Button from 'react-bootstrap/Button';
import ButtonBox from './component/ButtonBox';
import ClipLoader from "react-spinners/ClipLoader";

//앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
//날씨정보에는 도시, 섭씨, 화씨 날씨상태
//밑에는 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른 도시)
//도시버튼 누를때마다 도시의 날씨가 나온다.
//현재위치버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
//데이터를 들고오는 동안 로딩스피너가 돈다.

function App() {



  const [weather, setWeather] = useState(null)
  const cities = ['paris', 'new york', 'tokyo', 'seoul']
  const [city, setCity] = useState('')
  let [loading, setLoading] = useState(false)
  //현재위치 위도, 경도 뽑는법
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    });
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=74da21da79452bd0fe9357fdc9f5949b&units=metric`
    setLoading(true)
    let responce = await fetch(url)
    let data = await responce.json()
    setWeather(data)
    console.log(data)
    setLoading(false)
  }

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=74da21da79452bd0fe9357fdc9f5949b&units=metric`
    setLoading(true)
    let responce = await fetch(url)
    let data = await responce.json()
    setWeather(data)
    setLoading(false)
  }

  //ui가 그려진 후 실행
  useEffect(() => {
    if (city == '') {
      getCurrentLocation()
    } else {
      getWeatherByCity()
    }
  }, [city])

  

 

  return (
    <>
      {
        loading == true ? <ClipLoader
          color='#f88c6b'
          loading={loading}
          size={150}
        /> : <div className='main-body'>
          <div>
            <MainBox weather={weather} />
            <ButtonBox cities={cities} setCity={setCity} getCurrentLocation={getCurrentLocation} />

          </div>
        </div>
      }





    </>
  );
}

export default App;
