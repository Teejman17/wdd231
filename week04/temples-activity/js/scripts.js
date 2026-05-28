import { temples } from '../data/temples.js'
// console.log(temples)

import { url } from '../data/temples.js'
// console.log(url)

const showHere = document.querySelector('#showHere');
const myDialogue = document.querySelector('#mydialogue');
const myTitle = document.querySelector('#myDialogue h2');
const myClose = document.querySelector('#myDialogue button');
const myInfo = document.querySelector('#myDialogue p');

myClose.addEventListener('click', () => {
    myDialogue.close();
});

function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src = `${url}${x.path}`
        photo.alt = x.name
        photo.addEventListener('click', () => {
            showStuff(x)
        });

        showHere.appendChild(photo)
    });

}

displayItems(temples);

function showStuff(x) {
    myTitle.innerHTML = x.name
    myDialogue
    myDialogue.showModal()
}