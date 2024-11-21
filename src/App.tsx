import styles from "./App.module.css";
import Form from "./components/form/Form";
import useWeather from "./hooks/useWeather";
import WeatherDetail from "./components/weather-detail/WeatherDetail";
import Spiner from "./components/spiner/Spiner";
import Alert from "./components/alert/Alert";

function App() {
    const {weather, loading, notFound, fetchWeather, hasWeatherData} = useWeather();

    return (
        <>
            <h1 className={styles.title}>Weather Search Engine</h1>

            <div className={styles.container}>
                <Form fetchWeather={fetchWeather}/>
                {loading && <Spiner/>}
                {hasWeatherData && <WeatherDetail weather={weather}/>}
                {notFound && <Alert>City Not Found</Alert>}
            </div>
        </>
    );
}

export default App
