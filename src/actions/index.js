import axios from 'axios'; //lib for dealing with ajax requests

const API_KEY = "f9402b3e3c7e79a6f74fa3871820e2e9";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: weather
    }

}