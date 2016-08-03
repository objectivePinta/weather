const API_KEY = 'f4ec5c251d6d4938bb37b1505ef462b8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;
import axios from 'axios';
//http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=f4ec5c251d6d4938bb37b1505ef462b8
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city:string) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log("request:", request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}