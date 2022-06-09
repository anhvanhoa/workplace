// ẩn hiện input search

var box_search = document.querySelector('.box-search')
var search = document.querySelector('.search')

search.onclick = () => {
    box_search.classList.toggle('move-search')
}


// add "," number

var commas = document.querySelectorAll('.comma')

function Comma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

for(comma of commas) {
    comma.innerText = Comma(comma.innerText) + " VND"
}

// Thư viên slider

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
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