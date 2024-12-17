const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', (event) => {
    menuItems.classList.toggle('active');
    event.stopPropagation(); 
});

document.addEventListener('click', (event) => {
    if (!menuItems.contains(event.target) && event.target !== menuToggle) {
        menuItems.classList.remove('active');
    }
});
