

const HourlyForecast = (props) => {
  if (!props.weatherData) {
    return <div>Search for a city to see its weather</div>;
  }

  
  const currentHour = props.weatherData.current.time.slice(0,13)
  const startIndex = props.weatherData.hourly.time.findIndex((t)=>(t.startsWith(currentHour)))
  const times = props.weatherData.hourly.time.slice(startIndex,startIndex+24);
  console.log(currentHour , startIndex);
  
  return (
    <div  className="rounded-2xl bg-slate-800 p-5">
      <h2 className="mb-5 text-lg font-semibold text-white">
        Hourly Forecast
      </h2>
    <div id="tasklist" className="hourly-forecast flex gap-0 overflow-x-auto  ">
      {times.map((time, idx) => {
        const formattedTime = new Date(time).toLocaleTimeString("en-IN", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        const temperature = props.weatherData.hourly.temperature_2m[startIndex+idx];

        return (
            <div key={`${time}-${idx}`} className=" flex min-w-35 flex-1 flex-col items-center justify-center gap-4 border-r border-slate-600 px-3 py-4 last:border-r-0 ">
            <p className="whitespace-nowrap text-lg font-medium text-slate-400">{formattedTime}</p>
            <p className="text-xl font-semibold text-white">{temperature}°C</p>
          </div>
          
        );
      })}
    </div>
    </div>
  );
};

export default HourlyForecast;
