particlesJS("particles-js", {"particles":{"number":{"value":200,"density":{"enable":true,"value_area":600}},"color":{"value":["#e7c414", "#f4dd7d", "#e53e3e", "#e0871e"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.8601709293791772,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":true,"speed":2,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":97.44926547616141,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

var nav, yScroll, navbarCollapse;

function scrollDown() {
  nav = document.querySelector('nav');
  navbarCollapse = document.querySelector('#navbarCollapse')
  yScroll = (window.pageYOffset);
  
  if (yScroll > 500) {
    nav.style.borderBottom = '1px solid #dddcdc';
    nav.style.backgroundColor = 'white';
    nav.style.boxShadow = '#8e8e8e 0 0 3px 0';
    navbarCollapse.style.backgroundColor = 'rgba(255, 255, 255, .9)';
  } else {
    nav.style.backgroundColor = 'rgba(255, 255, 255, .9)';
    nav.style.border = '0';
    nav.style.boxShadow = 'none';
    navbarCollapse.style.backgroundColor = 'rgba(255, 255, 255, .9)';
  }
}

window.addEventListener('scroll', scrollDown);