const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// const myTown = document.querySelector('#town');
// const myDescription = document.querySelector('#description');
// const myTemperature = document.querySelector('#temperature');
// const myGraphic = document.querySelector('#graphic');

const myKey = "776cef31d554a322795d49a08404ba59"
const myLat = "49.75"
const myLong = "6.63"

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=776cef31d554a322795d49a08404ba59';

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            displayResults(data);

        } else {
            throw Error(await response.text());
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
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

// function disaplyResults(data) {
//     console.log('hello')
//     myTown.innerHTML = data.name
//     myDescription.innerHTML = data.weather[0].description
//     myTemp.innerHTML = `${data.main.temp}&deg;F`
//     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}/@2x.png`
//     myGraphic.setAttribute('src', iconsrc)
//     myGraphic.setAttribute('alt', data.weather[0].description)
// }

apiFetch()