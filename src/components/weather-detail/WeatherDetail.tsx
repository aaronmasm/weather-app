import {Weather} from "../../hooks/useWeather";
import styles from './WeatherDetail.module.css';

type WeatherDetailProps = {
    weather: Weather;
}

export default function WeatherDetail({weather}: WeatherDetailProps) {
    return (
        <div className={styles.container}>
            <h2>Weather of: {weather.name}</h2>
            <p className={styles.current}>{parseInt(weather.main.temp.toString())}&deg;C</p>
            <div className={styles.temperatures}>
                <p>Min: <span>{parseInt(weather.main.temp_min.toString())}&deg;C</span></p>
                <p>Max: <span>{parseInt(weather.main.temp_max.toString())}&deg;C</span></p>
            </div>
        </div>
    );
}