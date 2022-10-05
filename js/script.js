
var swiper = new Swiper(".mySwiper", {
  slidesPerView:4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  loop: true,
  autoplay: {
    delay: 4000,
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

