import {WeatherInfo} from "../utils/types.w.ts";


interface WeatherProps {
    weather: WeatherInfo;
    message: string
}

const Weather = ({weather, message}:WeatherProps) => {

    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                        <p>Location: {weather.country}, {weather.city}</p>
                        <p>Temp: {weather.temp}</p>
                        <p>Pressure: {weather.pressure}</p>
                        <p>Sunset: {weather.sunset.toLocaleTimeString()}</p>
                </>
            }
            <>{message}</>
        </div>
    )

}

export default Weather;