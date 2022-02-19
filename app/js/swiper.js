// core version + navigation, pagination modules:
import Swiper, {
  Navigation,
  Pagination,
} from "../../node_modules/swiper/swiper-bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 16,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    1000: {
      spaceBetween: 16,
    },
  },

  //   // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //   // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   //Управление слайдера с помощью клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  //   //Управление слайдера с помощью мыши
  Mousewheel: {
    enabled: true,
    sensitivity: 1,
    eventsTarget: "swiper-slide",
  },
});

///////////////////////////////////////////////////////
const slider = document.querySelector(".news__slider");
let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 1100 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      slideClass: "news__item",
      wrapperClass: "news__items",
      slidesPerView: 2,
      loop: true,
      // If we need pagination
      pagination: {
        el: ".news-swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".news-swiper-button-next",
        prevEl: ".news-swiper-button-prev",
      },
      //Управление слайдера с помощью клавиатуры
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      //Управление слайдера с помощью мыши
      Mousewheel: {
        enabled: true,
        sensitivity: 1,
        eventsTarget: "news__item",
      },
      breakpoints: {
        //when window width is >= 750px
        750: {
          slidesPerView: 2,
        },
        300: {
          slidesPerView: 1,
        }
      },
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 1100) {
    slider.dataset.mobile = "false";
    //console.log(slider.dataset.mobile);
    mySwiper.destroy();
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
 console.log(111);
});

//init Swiper:
// const newsSwiper = new Swiper(".news__swiper", {
//   // Optional parameters
//   //enabled: true,
//   loop: true,
//   slideClass: "news__item",
//   wrapperClass: "news__items",
//   slidesPerView: 1,
//   //slidesPerGroup: 1,
//   //destroy: false,
//   observer: true,
//   //spaceBetween: 6,
//   //centeredSlides: true,

//   breakpoints: {
//     // when window width is >= 1000px
//     1000: {
//        //enabled: false,
//     },
//   },

//   // If we need pagination
//   pagination: {
//     el: ".news-swiper-pagination",
//     clickable: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".news-swiper-button-next",
//     prevEl: ".news-swiper-button-prev",
//   },
//   //Управление слайдера с помощью клавиатуры
//   // keyboard: {
//   //   enabled: true,
//   //   onlyInViewport: true,
//   //   pageUpDown: true,
//   // },
//   //Управление слайдера с помощью мыши
//   // Mousewheel: {
//   //   enabled: true,
//   //   sensitivity: 1,
//   //   eventsTarget: "swiper-slide",
//   // },
// });