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

// SPOTLIGHT MEMBERS SECTION
 
const membersURL = '../data/members.json';

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);

            displaySpotlight(data.members);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displaySpotlight(members) {
    const spotlightMembers = members.filter(member => member.membership === 2 || member.membership === 3);


    const spotlightCards = document.querySelector('#spotlightCards');
    const randomMembers = spotlightMembers.sort(() => 0.5 - Math.random());
    const chosenMembers = randomMembers.slice(0, 3);

    spotlightCards.innerHTML = '';

    chosenMembers.forEach(member => {
        let card = document.createElement('section');
        card.className = 'memberCard';
        let img = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let level = document.createElement('p');
        let slogan = document.createElement('p');
        let established = document.createElement('p');

        name.textContent = member.companyName;
        address.textContent = member.companyAddress;
        phone.textContent = `Phone: ${member.phoneNumber}`;
        slogan.textContent = `"${member.slogan}"`;
        established.textContent = `Since: ${member.establishedYear}`;
        website.href = member.website;
        website.textContent = `Visit ${member.companyName}'s website`;

        img.setAttribute('src', `images/${member.img}`);
        img.setAttribute('alt', `member image`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '200');
        img.setAttribute('height', '150');

        let membershipLevel = 'member';
        if (member.membership == 2) membershipLevel = 'Silver Member';
        if (member.membership == 3) membershipLevel = 'Gold Member';
        level.textContent = `Level: ${membershipLevel}`;
        
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(slogan);
        card.appendChild(website);
        card.appendChild(level);
        card.appendChild(established);

        spotlightCards.appendChild(card)

    });
}

getMembers();


const year = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;


const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified ${document.lastModified}`;