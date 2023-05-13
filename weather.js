// const { clipByValue } = require("@tensorflow/tfjs");

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6476d66b5emsh2b433b4584224e0p1165d1jsn86cf78e48311',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let flag = false;

const getWeather = async (city)=> {
    try {
        cityName.innerHTML = city;
        const response = await fetch(`${url}${city}`, options);
        const result = await response.json();
        console.log(result);

        if(Object.keys(result)[0] == 'messages'){
            errorMessage.style.display = 'inline';
            errorMessage.innerHTML = result.messages + '!';
            flag = true;

            cloud_pct.innerHTML  = '--/--';
            temp.innerHTML = '--/--';
            feels_like.innerHTML = '--/--';
            humidity.innerHTML = '--/--';
            min_temp.innerHTML = '--/--';
            max_temp.innerHTML = '--/--';
            wind_speed.innerHTML = '--/--';
            wind_degrees.innerHTML = '--/--';
            sunrise.innerHTML = '--/--';
            sunset.innerHTML = '--/--';
        }

        else{
            if(flag){
                restartSucessMessage.style.display = 'inline';
                errorMessage.innerHTML = 'API fetch Successful !';
                flag = false;
            }

            cloud_pct.innerHTML  = result.cloud_pct;
            temp.innerHTML = result.temp;
            feels_like.innerHTML = result.feels_like;
            humidity.innerHTML = result.humidity;
            min_temp.innerHTML = result.min_temp;
            max_temp.innerHTML = result.max_temp;
            wind_speed.innerHTML = result.wind_speed;
            wind_degrees.innerHTML = result.wind_degrees;
            sunrise.innerHTML = result.sunrise;
            sunset.innerHTML = result.sunset;
        }

        // document.getElementById('temp').innerHTML = temp;
        // console.log(feels_like.innerHTML);
    } catch (err) {
        // errorMessage.innerHTML = err.messages;
        console.error(err.messages + '**>');
    }
};

// const page = document.getElementById('window');
// page.addEventListener('load', getWeather);

webpage.addEventListener('load', getWeather('Delhi'));

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    getWeather(city.value);
});
