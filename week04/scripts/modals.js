const openBUtton1 = document.querySelector('#openButton1');
const openBUtton2 = document.querySelector('#openButton2');
const openBUtton3 = document.querySelector('#openButton3');

const dialogueBox = document.querySelector('#dialogueBox');
const dialogueBoxText = document.querySelector('#dialogueBox div');
const closeButton = document.querySelector('#closeButton');

openBUtton1.addEventListener('click', () => {
    dialogueBoxText.innerHTML = "An apple has 95 calories"
    dialogueBox.showModal();
});

openBUtton2.addEventListener('click', () => {
    dialogueBoxText.innerHTML = "An apple has 45 calories"
    dialogueBox.showModal();
});

openBUtton3.addEventListener('click', () => {
    dialogueBoxText.innerHTML = "An apple has 105 calories"
    dialogueBox.showModal();
});


closeButton.addEventListener('click', () => {
    dialogueBox.close();
});
