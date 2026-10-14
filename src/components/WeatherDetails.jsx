const WeatherDetails = (props) => {
  if (!props.weatherData) {
    return <div className="rounded-2xl bg-slate-800 p-5 text-slate-300">
    Search for a city to see its weather</div>;
  }
  return (
    <div className='flex flex-wrap gap-4'>
        <div className='min-w-0 flex-1 basis-[40%] rounded-xl bg-slate-800 p-4'>
        <h1 className='text-2xl '>Feels Like</h1>
        <h2 className='text-2xl font-medium'>{props.weatherData.current.apparent_temperature}°C </h2>
        </div>
        <div className='min-w-0 flex-1 basis-[40%] rounded-xl bg-slate-800 p-4'>
          <h1 className='text-2xl '>Humidity</h1>
          <h2 className='text-2xl font-medium'>{props.weatherData.current.relative_humidity_2m}%</h2>
        </div>
        <div className='min-w-0 flex-1 basis-[40%] rounded-xl bg-slate-800 p-4'>
          <h1 className='text-2xl ' >Wind Speed</h1>
          <h2 className='text-2xl font-medium'>{props.weatherData.current.wind_speed_10m}km/h</h2>
        </div>
        <div className='min-w-0 flex-1 basis-[40%] rounded-xl bg-slate-800 p-4'>
          <h1 className='text-2xl ' >Precipitation</h1>
          <h2 className='text-2xl font-medium'>{props.weatherData.current.precipitation}mm</h2>
        </div>
    </div>
  )
}

export default WeatherDetails
