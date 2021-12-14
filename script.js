// definisco l'array dei titoli
const headlinesList = ['Questo è un titolo', 'Questo è un titolo diverso', 'Il terzo titolo' ];

// definisco l'array dei paragrafi
const paragraphsList = [
    'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
];

// definisco l'array dele immagini
const imagesList = [
    'img/img-1.jpg',
    'img/img-2.jpg',
    'img/img-3.jpg'
];

// dichiaro la variabile dell'index corrente dandogli un valore iniziale di 0
let currentIndex = 0;

// definisco le variabili di collegamento al codice html
const headline = document.querySelector('.box-head');
const paragraph = document.querySelector('.box-main');
const image = document.querySelector('.box-img');

// dichiaro le variabili dei due pulsanti
const buttonNext = document.getElementById('page-next');
const buttonBack = document.getElementById('page-back');

// stampo l'output corrispondente al valore inziale dell'index
headline.innerHTML = `<h1>${headlinesList[currentIndex]}</h1>`;
paragraph.innerHTML = `<p>${paragraphsList[currentIndex]}</p>`;
image.src = imagesList[currentIndex];

// definisco l'evento 'click' per il button-back
buttonBack.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = headlinesList.length - 1;
    }
    headline.innerHTML = `<h1>${headlinesList[currentIndex]}</h1>`;
    paragraph.innerHTML = `<p>${paragraphsList[currentIndex]}</p>`;
    image.src = imagesList[currentIndex];
})

// definisco l'evento 'click' per il button-next
buttonNext.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex > headlinesList.length - 1) {
        currentIndex = 0;
    }
    headline.innerHTML = `<h1>${headlinesList[currentIndex]}</h1>`;
    paragraph.innerHTML = `<p>${paragraphsList[currentIndex]}</p>`;
    image.src = imagesList[currentIndex];
})