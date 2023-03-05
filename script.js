
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', function() {
  nav.classList.toggle('active');
});


$(document).ready(function(){
    $('.menu-icon').click(function(){
      $('nav ul').toggleClass('showing');
    });
  });
  