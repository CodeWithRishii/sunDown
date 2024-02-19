const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page3Animation() {
  var elemContainer = document.querySelector(".elem-container");
  var fixedImageContainer = document.querySelector(".fixed-image-container");
  var elems = document.querySelectorAll(".elem");

  elemContainer.addEventListener("mouseenter", function abc() {
    fixedImageContainer.style.display = "block";
  });
  elemContainer.addEventListener("mouseleave", function abc() {
    fixedImageContainer.style.display = "none";
  });

  elems.forEach((elem) => {
    elem.addEventListener("mouseenter", function img() {
      var imgUrl = elem.getAttribute("img-url");
      fixedImageContainer.style.backgroundImage = `url(${imgUrl})`;
      // console.log(imgUrl)
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
swiperAnimation();
page3Animation();
