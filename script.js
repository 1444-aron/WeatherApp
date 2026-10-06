 var city = document.getElementById("cities")

        function weather()
        {
            var apiUrl = `http://api.weatherapi.com/v1/current.json?key=6d81843e15824bc9a23160939260610&q=${city.options[city.selectedIndex].value}&aqi=no`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('weather').innerText = `The current temperature in ${data.location.name} is ${data.current.temp_c}°C`;
                    document.getElementById('text').innerText = `${data.current.condition.text}`;
                    document.getElementById('img').src = `https:${data.current.condition.icon}`;
                    console.log(data.current.condition.icon)
                })
                .catch(error => console.error('Error:', error));
        }
        