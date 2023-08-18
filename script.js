$(document).ready(function() {
    $("#weatherForm").submit(function(event) {
        event.preventDefault(); // Prevent form submission
        
        let city = $("#loc").val(); // Get the city from the input
        if (city.includes("Dehli")) {
            city = 'delhi';
        }
        city = $.trim(city.split(",")[0]);
        const proxyUrl = 'https://indiaweather.000webhostapp.com/weather-proxy.php'; // Path to the PHP proxy file
        $.ajax({
            url: proxyUrl + '?city=' + city,
            method: 'GET',
            success: function(data) {
                if (data.main && data.main.temp !== undefined) {
                    const temperatureCelsius = data.main.temp - 273.15;
                    // Rest of your success handling code
                } else {
                    handleError("Temperature data not available.");
                }
                 // Handle successful response
                 const temperatureCelsius = data.main.temp - 273.15;
                 const weatherResult = document.getElementById('weatherResult');
                 const humidity = data.main.humidity;
                 const pressure = data.main.pressure;
                 const visibility = data.visibility;
                 // Get the weather condition code from the API response
                 const weatherConditionCode = data.weather[0].id;
                const conditionIconMap = {
                    200: 'wi-thunderstorm',  // Thunderstorm with light rain
                    201: 'wi-thunderstorm',  // Thunderstorm with rain
                    202: 'wi-thunderstorm',  // Thunderstorm with heavy rain
                    210: 'wi-thunderstorm',  // Light thunderstorm
                    211: 'wi-thunderstorm',  // Thunderstorm
                    212: 'wi-thunderstorm',  // Heavy thunderstorm
                    221: 'wi-thunderstorm',  // Ragged thunderstorm
                    230: 'wi-thunderstorm',  // Thunderstorm with light drizzle
                    231: 'wi-thunderstorm',  // Thunderstorm with drizzle
                    232: 'wi-thunderstorm',  // Thunderstorm with heavy drizzle
                
                    300: 'wi-showers',       // Light intensity drizzle
                    301: 'wi-showers',       // Drizzle
                    302: 'wi-showers',       // Heavy intensity drizzle
                    310: 'wi-showers',       // Light intensity drizzle rain
                    311: 'wi-showers',       // Drizzle rain
                    312: 'wi-showers',       // Heavy intensity drizzle rain
                    313: 'wi-showers',       // Shower rain and drizzle
                    314: 'wi-showers',       // Heavy shower rain and drizzle
                    321: 'wi-showers',       // Shower drizzle
                
                    500: 'wi-rain',          // Light rain
                    501: 'wi-rain',          // Moderate rain
                    502: 'wi-rain',          // Heavy intensity rain
                    503: 'wi-rain',          // Very heavy rain
                    504: 'wi-rain',          // Extreme rain
                    511: 'wi-rain-mix',      // Freezing rain
                    520: 'wi-showers',       // Light intensity shower rain
                    521: 'wi-showers',       // Shower rain
                    522: 'wi-showers',       // Heavy intensity shower rain
                    531: 'wi-showers',       // Ragged shower rain
                
                    600: 'wi-snow',          // Light snow
                    601: 'wi-snow',          // Snow
                    602: 'wi-snow',          // Heavy snow
                    611: 'wi-sleet',         // Sleet
                    612: 'wi-rain-mix',      // Shower sleet
                    613: 'wi-sleet',         // Light rain and snow
                    615: 'wi-rain-mix',      // Rain and snow
                    616: 'wi-snowflake-cold',// Light shower snow
                    620: 'wi-snow',          // Light shower snow
                    621: 'wi-snow',          // Shower snow
                    622: 'wi-snow',          // Heavy shower snow
                
                    701: 'wi-fog',           // Mist
                    711: 'wi-smoke',         // Smoke
                    721: 'wi-day-haze',      // Haze
                    731: 'wi-dust',          // Sand/dust whirls
                    741: 'wi-fog',           // Fog
                    751: 'wi-dust',          // Sand
                    761: 'wi-dust',          // Dust
                    762: 'wi-dust',          // Volcanic ash
                    771: 'wi-strong-wind',   // Squalls
                    781: 'wi-tornado',       // Tornado
                
                    800: 'wi-day-sunny',     // Clear sky
                
                    801: 'wi-day-cloudy',    // Few clouds
                    802: 'wi-day-cloudy-gusts', // Scattered clouds
                    803: 'wi-day-cloudy-windy', // Broken clouds
                    804: 'wi-day-fog',       // Overcast clouds
                
                    // Additional icons
                    900: 'wi-na'             // Not available / unknown condition
                };

                // Default icon class in case condition code is not matched
                let weatherIconClass = 'wi-na';

                // Check if a matching icon class exists for the condition code
                if (conditionIconMap.hasOwnProperty(weatherConditionCode)) {
                    weatherIconClass = conditionIconMap[weatherConditionCode];
                }

                            weatherResult.innerHTML = `
                <h3>Weather in <span style='color:orange'>${data.name.toUpperCase()}</span>:<i class="wi ${weatherIconClass} big-icon"></i> <!-- Display weather icon --></h3>
                <table class="weather-table">
                    <tr>
                        <td class="big-font">Temperature: ${temperatureCelsius.toFixed(2)}°C<br>
                            
                            Weather: ${data.weather[0].description}
                        </td>
                        <td class="small-font">
                            Humidity: ${humidity}%<br>
                            Pressure: ${pressure} hPa<br>
                            Visibility: ${visibility} meters
                        </td>
                    </tr>
                </table>
            `;
                
                // Clear the input field after successful submission
                $("#loc").val(''); // Clear the input field after successful submission
            },
            error: function(xhr, textStatus, errorThrown) {
                handleError(xhr);
            }
        });
    });
});

function handleError(errorMsg) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `<p style="color:red; margin-left:8rem;margin-right:8rem;">Data Not Available</p>`;
}
