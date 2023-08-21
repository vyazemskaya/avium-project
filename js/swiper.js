const rem = function (rem) {
  if (window.innerWidth > 768) {
    return 0.005208335 * window.innerWidth * rem;
  } else {
    // где 375 это ширина моб версии макета
    return (100 / 375) * (0.1 * window.innerWidth) * rem;
  }
};

const swiperSolutionSection2 = new Swiper('.swiper_solution-section-second', {
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
});

const swiperConceptColorSection3 = new Swiper(
  '.swiper_conceptColor-section-third',
  {
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
);

const swiperCalculateSection = new Swiper('.swiper_calculate-section', {
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
});

const swiperDetailsCertificates = new Swiper('.swiper_certificates', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  // centeredSlides: true,
  // spaceBetween: rem(1),
  breakpoints: {
    769: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: rem(5),
    },
  },
});
