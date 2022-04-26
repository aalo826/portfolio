// hamburger menu

const hamburgerDropdown = document.querySelector('#hamburger-icon')
const hamburgerNav = document.querySelector('.hamburger-nav')

hamburgerDropdown.addEventListener('click', function() {

  if (hamburgerNav.style.opacity === '1'){
    // hamburgerNav.style.display = "none";
    hamburgerNav.style.opacity = "0";
  } else {
    // hamburgerNav.style.display = "block";
    hamburgerNav.style.opacity = "1";
  }

})

