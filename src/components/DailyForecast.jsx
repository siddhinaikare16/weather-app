const DailyForecast = (props) => {
  if (!props.weatherData) {
    return <div className="rounded-2xl bg-slate-800 p-5 text-slate-400">Search for a city to see its weather</div>;
  }
  const dates = props.weatherData.daily.time

  return (
    <div className="bg-slate-800 rounded-2xl p-5">
       <h2 className="mb-6 text-xl font-semibold text-white">
        7-Day Forecast
      </h2>
    <div className="space-y-2">
      {dates.map((date , idx)=>{
          const formattedTimeDate = new Date(date).toLocaleDateString("en-IN",{
            weekday : "long"
          })

          const maxTemp = props.weatherData.daily.temperature_2m_max[idx]

          const minTemp = props.weatherData.daily.temperature_2m_min[idx]


          return(
            <div key={date} className="flex items-center justify-between gap-3 rounded-xl px-3 py-6.5 transition-colors hover:bg-slate-500">
               <p className="w-16 text-xl font-medium text-slate-300">
                {formattedTimeDate}
              </p>
                <div className="flex items-center gap-3">
                <span className="text-xl text-slate-400">
                  {Math.round(minTemp)}°
                </span>

                <div className="h-1.5 w-12 overflow-hidden rounded-full bg-slate-600">
                  <div className="h-full w-3/4 rounded-full bg-sky-400" />
                </div>

                <span className="w-8 text-right text-xl font-semibold text-white">
                  {Math.round(maxTemp)}°
                </span>
              </div>
            </div>
          )
      })}

        
    </div>
    </div>
  )
}

export default DailyForecast
