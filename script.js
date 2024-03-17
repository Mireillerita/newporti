document.getElementById('menuButton').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobileMenu');
    var closeButton = document.getElementById('closeButton');
    var menuButton = document.getElementById('menuButton');
    
    mobileMenu.classList.toggle('hidden');
    closeButton.classList.toggle('hidden');
    menuButton.classList.toggle('hidden');
});
document.getElementById('closeButton').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobileMenu');
    var closeButton = document.getElementById('closeButton');
    var menuButton = document.getElementById('menuButton');
    
    mobileMenu.classList.add('hidden');
    closeButton.classList.add('hidden');
    menuButton.classList.remove('hidden');
});
