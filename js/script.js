let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');


menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 4;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 6; i++){
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 3;
   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
};


function mialerta() {  
  Swal.fire({
    title: '¡Tu información ha sido enviada correctamente!',
    text: 'Nuestro personal se pondrá en contacto contigo pronto...',
    width: '50%',
    backdrop: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    showConfirmButton: true,
    confirmButtonColor: '#60CA48',
    confirmButtonText: 'Continuar...',
    closeButtonArialLabel: 'Cerrar Alerta...',
    icon: 'success',
    timer: 5000
  });
} 


jQuery(document).ready(function( $ ) {
   $("#google-reviews").googlePlaces({
        placeId: 'ChIJL9gFW1DhoI8R1CSLU2Zd8yI' //Find placeID @: https://developers.google.com/places/place-id
      , render: ['reviews']
      , min_rating: 4
      , max_rows:4
   });
});

