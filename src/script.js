function scripts() {
  const slides = document.querySelectorAll('.benefits-slider__item')
  let slideIndex = 1

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < slides.length) {
      slideIndex = slides.length
    }

    
  }
}


