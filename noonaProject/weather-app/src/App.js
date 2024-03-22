import { useEffect, useState } from 'react';
import './App.css';
import MainBox from './component/MainBox';
import Button from 'react-bootstrap/Button';


//앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
//날씨정보에는 도시, 섭씨, 화씨 날씨상태
//밑에는 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른 도시)
//도시버튼 누를때마다 도시의 날씨가 나온다.
//현재위치버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
//데이터를 들고오는 동안 로딩스피너가 돈다.

function App() {
  //ui가 그려진 후 실행
  useEffect(() => {
    getCurrentLocation()
  }, [])


  const [weather, setWeather] = useState(null)

  //현재위치 위도, 경도 뽑는법
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    });
  }
  const getParisLocation = () => {
    getWeatherByCurrentLocation(48.8534, 2.3488)
  }
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=74da21da79452bd0fe9357fdc9f5949b&units=metric`
    let responce = await fetch(url)
    let data = await responce.json()
    console.log(data)
    setWeather(data)
  }




  return (
    <>
      <div className='main-body'>
        <div>
          <MainBox weather={weather} />


          <div className='button-box'>

            <Button variant="warning">Current Location</Button>{' '}
            <Button variant="warning">hanoi</Button>{' '}
            <Button variant="warning" onClick={() => { getParisLocation() }}>paris</Button>{' '}
            <Button variant="warning">new york</Button>{' '}
            <Button variant="warning">seoul</Button>{' '}
          </div>
        </div>
      </div>




    </>
  );
}

export default App;
