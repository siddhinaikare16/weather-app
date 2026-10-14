
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import DailyForecast from './components/DailyForecast'
import WeatherDetails from './components/WeatherDetails'
import { useState } from 'react'
import { getCoordinates, getWeather } from './services/weatherApi'

const App = () => {
  const [city, setCity] = useState('')
  const [error, setError] = useState('')
  const [weatherData, setWeatherData] = useState(null);
  console.log(city);

  const handleSearch = async(searchedCity)=>{
    try {
      setError('')
      const coordinates = await getCoordinates(searchedCity)
      if (coordinates == null) {
        setWeatherData(null)
        alert("City not Found !!")
        console.log(weatherData);
        return;
      } else {
        setCity(`${coordinates.name} ,${coordinates.country}`)
        const weather = await getWeather(coordinates.latitude , coordinates.longitude)
        setWeatherData(weather)
      }  
    } catch (err) {
      setError("Couldn't load weather. Check your connection and try again.")
      setWeatherData('')
    }
    
  }
  
  return (
    <div className='min-h-screen bg-slate-950 p-4 text-white md:p-6'>
      <div className='mx-auto max-w-7xl w-full'>
        <SearchBar onSearch = {handleSearch} />
        {error && <p className="mt-4 text-red-400">{error}</p>}
        <div className='mt-6 flex flex-col gap-6 lg:flex-row'>
          <div className="min-w-0 flex-1 space-y-6">
          <CurrentWeather city={city} weatherData = {weatherData}/>
          <WeatherDetails weatherData = {weatherData}/>
          <HourlyForecast weatherData = {weatherData}/>
        </div>
        <div className='min-w-0 lg:w-2/5'>
          <DailyForecast weatherData = {weatherData}/>
        </div>    
        </div>
        
      </div>     
    </div>
  )
}

export default App
