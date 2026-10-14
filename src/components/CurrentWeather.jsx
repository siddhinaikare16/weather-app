   import { weatherCodes } from "../utils/weatherCodes";

const CurrentWeather = (props) => {
  if (!props.weatherData) {
    return <div className="rounded-2xl bg-slate-800 p-6 text-slate-300">
    Search for a city to see its weather</div>;
  }
  console.log("weather code:", props.weatherData.current.weather_code);
   
      
  return (
    <div className="rounded-2xl bg-slate-800 p-6 md:p-8">
      <p className="text-lg font-medium text-slate-300">{props.city}</p>
      <div className="mt-4">
        <h2 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">{props.weatherData.current.temperature_2m}°C</h2>
        <p className="mt-3 text-lg text-slate-400">Feels like {props.weatherData.current.apparent_temperature}°C</p>
        <p className="mt-2 text-base font-medium text-sky-300">{weatherCodes[props.weatherData.current.weather_code] || "unknown weather condition"}</p>
  
      </div>

    </div>
  )
}

export default CurrentWeather
