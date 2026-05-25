const currentTemp = document.querySelector('#currentTemp');
const myDescription = document.querySelector('#description');
const myHigh = document.querySelector('#high');
const myLow = document.querySelector('#low');
const myHumidity = document.querySelector('#humidity');
const mySunrise = document.querySelector('#sunrise');
const mySunset = document.querySelector('#sunset');
const myGraphic = document.querySelector('#graphic');
const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');


const myKey = '776cef31d554a322795d49a08404ba59';
const myLat = '37.097';
const myLong = '-113.583';

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`
const myForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);

            displayResults(data);
        } else {
            throw Error(await response.text());
        }

        const forecastResponse = await fetch(myForecast);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();

            displayForecast(forecastData);
        } else {
            throw Error(await forecastResponse.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    // console.log('hello')
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    myDescription.innerHTML = `${desc}`;
    myHigh.innerHTML = `${data.main.temp_max}&deg;F`;
    myLow.innerHTML = `${data.main.temp_min}&deg;F`;
    myHumidity.innerHTML = `${data.main.humidity}%`;

    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', desc);

    const time = (unixTime) => {
        const date = new Date(unixTime * 1000);
        return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    };

    mySunrise.innerHTML = time(data.sys.sunrise);
    mySunset.innerHTML = time(data.sys.sunset);

}

function displayForecast(forecastData) {
    const noonData = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));

    const days = [day1, day2, day3];
    for (let i = 0; i < 3; i++) {
        const dayTemp = noonData[i];
        const date = new Date(dayTemp.dt * 1000);
        let dateName;
        if (i === 0) {
            dateName = 'Today';
        } else {
            dateName = date.toLocaleDateString('en-US', { weekday: 'long' });
        }
    
        days[i].innerHTML = `${dateName}: ${dayTemp.main.temp_max}&deg;F`;
    }
    

}

apiFetch();