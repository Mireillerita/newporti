document.getElementById('menuButton').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobileMenu');
    var closeButton = document.getElementById('closeButton');
    var menuButton = document.getElementById('menuButton');

    mobileMenu.classList.toggle('hidden');
    closeButton.classList.toggle('hidden');
    menuButton.classList.toggle('hidden');
});
document.getElementById('closeButton').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobileMenu');
    var closeButton = document.getElementById('closeButton');
    var menuButton = document.getElementById('menuButton');

    mobileMenu.classList.add('hidden');
    closeButton.classList.add('hidden');
    menuButton.classList.remove('hidden');
});
// const titles = ['frontedDev', 'student', 'telecom engineer'];
// const spanElement = document.querySelector('.text-red-800');
// function updateTitle() {

//     const currentTitle = spanElement.textContent.trim();

//     const currentIndex = titles.indexOf(currentTitle);


//     const nextIndex = (currentIndex + 1) % titles.length;


//     const nextTitle = titles[nextIndex];


//     spanElement.textContent = nextTitle;
// }
// setInterval(updateTitle, 2000);

const titles = ['frontedDev|', 'student|', 'telecom engineer|'];
const spanElement = document.getElementById('titleSpan');

let currentIndex = 0;
let letterIndex = 0;

function updateTitle() {
    const currentTitle = titles[currentIndex];
    const currentLetters = currentTitle.slice(0, letterIndex + 1);

    spanElement.textContent = currentLetters;

    if (letterIndex < currentTitle.length - 1) {
        letterIndex++;
        setTimeout(updateTitle, 100);
    } else {
        setTimeout(nextTitle, 1000);
    }
}

function nextTitle() {
    letterIndex = 0;
    currentIndex = (currentIndex + 1) % titles.length;
    updateTitle();
}

updateTitle();


