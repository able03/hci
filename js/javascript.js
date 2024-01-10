const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 56)
    {
        nav.classList.add('navbar-scrolled');
    }
    else
    {
        nav.classList.remove('navbar-scrolled');
    }
});

/* const navL = document.querySelector('.nav-change');
window.addEventListener('scroll', () => {
  if(window.scrollY >= 56)
  {
    navL.classList.add('nav-text');
  }
  else{
    navL.classList.remove('nav-text');
  }
});
 */

$('.carousel .carousel-item').each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
  next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i = 0; i < minPerSlide; i++) { next=next.next(); if (!next.length) { next=$(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); } });

