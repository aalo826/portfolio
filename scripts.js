// hamburger menu

const hamburgerDropdown = document.querySelector('#hamburger-icon')

const hamburgerNav = document.querySelector('.hamburger-nav')

const navButton = document.querySelectorAll('a.hamburger-anchor')

hamburgerDropdown.addEventListener('click', function() {

  if (hamburgerNav.style.display === 'none'){
    hamburgerNav.style.display = "flex";
    hamburgerDropdown.innerHTML = `<i class="fa-solid fa-xmark fa-2x"></i>`;
  } else if (hamburgerNav.style.display = 'flex'){
    hamburgerNav.style.display = "none";
    hamburgerDropdown.innerHTML = `<i class="fa-solid fa-bars fa-2x">`;
  }
})

// navButton.addEventListener('click', function(){
  // hamburgerNav.style.display = "none";
  // hamburgerDropdown.innerHTML = `<i class="fa-solid fa-bars fa-2x">`;
// })

navButton.forEach((link) => {
  link.addEventListener('click', function(){
    hamburgerNav.style.display = "none";
    hamburgerDropdown.innerHTML = `<i class="fa-solid fa-bars fa-2x">`;
  })
})

console.log(navButton);