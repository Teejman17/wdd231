const navButton = document.querySelector('#hamButton');
const navLinks = document.querySelector('#navBar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const currentTemp = document.querySelector('#currentTemp');
const myDescription = document.querySelector('#description');
const myHigh = document.querySelector('#high');
const myLow = document.querySelector('#low');
const myHumidity = document.querySelector('#humidity');
const mySunrise = document.querySelector('#sunrise');
const mySunset = document.querySelector('#sunset');
const myGraphic = document.querySelector('#graphic');

const myKey = '776cef31d554a322795d49a08404ba59';
const myLat = '37.097';
const myLong = '-113.583';

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=imperial&appid=${myKey}`

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
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    // console.log('hello')
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    myDescription.innerHTML = `${desc}`;
    myHigh.innerHTML = `${Math.round(data.main.temp_max)}&deg;F`;
    myLow.innerHTML = `${Math.round(data.main.temp_min)}&deg;F`;
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

apiFetch();



const year = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified ${document.lastModified}`;