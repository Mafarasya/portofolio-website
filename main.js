
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("#navbar ul");

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})

$(document).ready(function () {
    $(window).on('load', function(){
    $('.my-profile').addClass('appear');
    $('.welcome-title').addClass('appear');
})
  });

  const toggleSwitch = document.querySelector('.theme-switch-wrapper');
  function switchTheme(e) {
      if(e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
      } 
      else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);



