export async function getCoordinates(city) {

    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`)

    const data = await response.json()

    console.log(data); 
    console.log("Searched city:", city);
console.log("Matched location:", data.results?.[0]?.name);
console.log("Country:", data.results?.[0]?.country);

    if (!data.results || data.results.length === 0) {
        return null;
    } else {
        return {
        latitude : data.results[0].latitude,
        longitude : data.results[0].longitude,
        name : data.results[0].name,
        country : data.results[0].country
    }
    }
    
}

export async function getWeather(latitude , longitude) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`)

    const data = await response.json()

    console.log(data);

    return data
    
}
