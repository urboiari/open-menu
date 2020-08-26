let hamburger = document.querySelector('.hamb');
let beachtime = document.querySelector('.h1-wrapper');
let cross = document.querySelector('.cross-menu');
let menu = document.querySelector('.menu');
let menuList = document.querySelectorAll('.menu > a');


hamburger.addEventListener('click', function() {
  hamburger.style.opacity = '0';
  beachtime.style.opacity = '0';
  setTimeout(function () {
    hamburger.style.display = 'none';
    beachtime.style.display = 'none';
    cross.style.display = 'flex';
    menu.style.display = 'flex';
  }, 500);
  setTimeout(function () {
    cross.style.opacity = '100';
    menu.style.opacity = '100';
  }, 1000);
});

cross.addEventListener('click', function() {
  cross.style.opacity = '0';
  menu.style.opacity = '0';
  setTimeout(function () {
    cross.style.display = 'none';
    menu.style.display = 'none';
    hamburger.style.display = 'flex';
    beachtime.style.display = 'flex';
  }, 500);
  setTimeout(function () {
    hamburger.style.opacity = '100';
    beachtime.style.opacity = '100';
  }, 1000);
});
