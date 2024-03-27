let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
  distance: '40px',
  duration: 2200,
});

sr.reveal('.fade-in-right',{delay:200, origin: 'right'});

sr.reveal('.fade-in-left',{delay:200, origin: 'left'});

sr.reveal('.fade-in-top' ,{delay:200, origin: 'top'});

sr.reveal('.fade-in-bottom',{delay:200, origin: 'bottom'});

