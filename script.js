// document.getElementById('menuButton').addEventListener('click', function () {
//     var mobileMenu = document.getElementById('mobileMenu');
//     var closeButton = document.getElementById('closeButton');
//     var menuButton = document.getElementById('menuButton');

//     mobileMenu.classList.toggle('hidden');
//     closeButton.classList.toggle('hidden');
//     menuButton.classList.toggle('hidden');
// });
// document.getElementById('closeButton').addEventListener('click', function () {
//     var mobileMenu = document.getElementById('mobileMenu');
//     var closeButton = document.getElementById('closeButton');
//     var menuButton = document.getElementById('menuButton');

//     mobileMenu.classList.add('hidden');
//     closeButton.classList.add('hidden');
//     menuButton.classList.remove('hidden');
// });






const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const menuItems = document.getElementById('menuItems');

menuButton.addEventListener('click', function () {
    menuItems.classList.toggle('hidden');
    menuButton.classList.add('hidden');
    closeButton.classList.remove('hidden');
});

closeButton.addEventListener('click', function () {
    menuItems.classList.toggle('hidden');
    menuButton.classList.remove('hidden');
    closeButton.classList.add('hidden');
});




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

const occupations = ['frontedDev|', 'student', 'telecom engineer'];
const occupElement = document.getElementById('occupations');

let startIndex = 0;
let letterIndexs = 0;

function updateOccupaion() {
    const currentOccupation = occupations[startIndex];
    const currentLetter = current.slice(0, letterIndexs + 1);
    occupElement.textContent = currentLetter;
    if (letterIndexs < currentOccupation.length - 1) {
        letterIndexs++;
        setTimeout(updateOccupaion, 100);

    } else {
        setTimeout(nextTitles, 1000);
    }
}

function slideTeamCards() {
    const container = document.querySelector('.team-cards');
    const firstCard = container.firstElementChild;
    container.style.transition = 'transform 0.5s ease';
    container.style.transform = 'translateX(-' + firstCard.offsetWidth + 'px)';
    container.appendChild(firstCard);
    
    setTimeout(() => {
        container.style.transition = 'none';
        container.style.transform = 'translateX(0)';
    }, 500);
}

// Call slideTeamCards function every 3 seconds (adjust the interval as needed)
setInterval(slideTeamCards, 3000);

function nextTitles() {
    letterIndexs = 0;
    startIndex = (startIndex + 1) % titles.length;
    updateOccupaion();
}
updateOccupaion



