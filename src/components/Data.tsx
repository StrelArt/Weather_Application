import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {useState} from "react";
import {api_key, base_url} from "../utils/constants.ts";
import {WeatherInfo} from "../utils/types.w.ts";

const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState<Partial<WeatherInfo>>({});
    const [message, setMessage] = useState('Enter city name');

    const getWeather = (city:string) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                setWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000)
                })
                setMessage('')
            })
            .catch(e => {
                console.log(e);
                setMessage('Enter correct city name')
            })
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather message={message} weather={weatherInfo as WeatherInfo}/>
        </div>
    );
};

export default Data;

