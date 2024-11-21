import axios from "axios";
import {z} from "zod";
import {SearchType} from "../types";
import {useMemo, useState} from "react";

// Zod Schema for validating the API response
const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    })
});

export type Weather = z.infer<typeof Weather>;

// Initial state for weather
const initialState = {
    name: '',
    main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0,
    },
};

export default function useWeather() {
    const [weather, setWeather] = useState<Weather>(initialState);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    // Function to obtain the weather
    const fetchWeather = async (search: SearchType) => {
        const appId = import.meta.env.VITE_API_KEY;
        setLoading(true);
        setWeather(initialState);
        setNotFound(false);

        try {
            // Normalize values to avoid discrepancies in results
            const city = search.city.trim().toLowerCase();
            const country = search.country.trim();

            // Geocoding: obtain latitude and longitude
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;
            const {data} = await axios(geoUrl);

            if (!data[0]) {
                setNotFound(true);
                return;
            }

            const resultCity = data[0].name.toLowerCase();
            const resultCountryCode = data[0].country;

            // Accurate city and country verification
            if (resultCity !== city || resultCountryCode !== country) {
                setNotFound(true);
                return;
            }

            // Obtain weather using latitude and longitude geocoding
            const lat = data[0].lat;
            const lon = data[0].lon;
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`;

            const {data: weatherResult} = await axios(weatherUrl);
            const result = Weather.safeParse(weatherResult);

            if (result.success) {
                setWeather(result.data);
            } else {
                setNotFound(true);
            }
        } catch (e) {
            console.log(e);
            setNotFound(true);
        } finally {
            setLoading(false);
        }
    };

    // Checking for weather data
    const hasWeatherData = useMemo(() => Boolean(weather.name), [weather]);

    return {
        weather,
        loading,
        notFound,
        fetchWeather,
        hasWeatherData,
    };
}
