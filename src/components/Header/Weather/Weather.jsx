import { useState, useEffect } from "react";
import styles from "./Weather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faSnowflake } from "@fortawesome/free-regular-svg-icons";
import {
  faCloud,
  faCloudShowersHeavy,
  faCloudRain,
  faBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  const [weather, setWeather] = useState();

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const pos = position.coords;
        // console.log(pos);
        // console.log(pos.latitude); //위도
        // console.log(pos.longitude); //경도
        const key = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=${key}&units=metric`
        );
        const data = await response.json();
        let icon = "";

        if (data.weather[0].main === "Clear") {
          icon = <FontAwesomeIcon icon={faSun} />;
        } else if (data.weather[0].main === "Clouds") {
          icon = <FontAwesomeIcon icon={faCloud} />;
        } else if (data.weather[0].main === "Drizzle") {
          icon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
        } else if (data.weather[0].main === "Rain") {
          icon = <FontAwesomeIcon icon={faCloudRain} />;
        } else if (data.weather[0].main === "Thunderstorm") {
          icon = <FontAwesomeIcon icon={faBolt} />;
        } else if (data.weather[0].main === "Snow") {
          icon = <FontAwesomeIcon icon={faSnowflake} />;
        } else if (data.weather[0].main === "Atmosphere") {
          icon = <FontAwesomeIcon icon={faSmog} />;
        }
        // console.log(data);
        setWeather({
          temp: data.main.temp, //온도
          humidity: data.main.humidity, //습도
          city: data.name, //현재 도시
          weather: icon,
        });
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
  // 컴포넌트 실행이 완료된 후(jsx코드가 실행된후)
  // useEffect가 실행
  useEffect(() => {
    getLocation();
  }, []);
  // console.log(weather);

  // 옵셔널 체이닝(optional chaning)

  return (
    <div className={styles.weather}>
      <div>{weather?.city ?? "로딩중··"}</div>
      <div>
        <span>{weather?.weather}</span>
        <span>{weather?.temp ?? "00,00"}°</span>
      </div>

      <div>{weather?.humidity ?? "00"}%</div>
    </div>
  );
}
