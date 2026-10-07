var city = document.getElementById("cities")

function weather()
{
    var apiUrl = `http://api.weatherapi.com/v1/current.json?key=6d81843e15824bc9a23160939260610&q=${city.value}&aqi=no`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather').innerText = `${data.current.temp_c}°C`;
            document.getElementById('city').innerText = `${data.location.name}, ${data.location.country}`;
            document.getElementById('text').innerText = `${data.current.condition.text}`;
            document.getElementById('img').src = `https:${data.current.condition.icon}`;

            document.getElementById('uv').innerText = `${data.current.uv}`;
            document.getElementById('wind_kph').innerText = `${data.current.wind_kph} km/h`;
            document.getElementById('wind_degree').innerText = `${data.current.wind_degree}° ${data.current.wind_dir}`;
            document.getElementById('chance_of_rain').innerText = `${data.current.chance_of_rain}%`;
            document.getElementById('humidity').innerText = `${data.current.humidity}%`;
            document.getElementById('feelslike_c').innerText = `${data.current.feelslike_c}°C`;
            document.getElementById('pressure_mb').innerText = `${data.current.pressure_mb} mb`;
            document.getElementById('last_updated').innerText = `Last update: ${data.current.last_updated}`;
            console.log(data.current.condition.icon)
        })
        .catch(error => console.error('Error:', error));
}
        