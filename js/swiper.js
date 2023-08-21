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

const swiperPhilosophySection2 = new Swiper(
  '.swiper_philosophy-section-second',
  {
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination_section-2',
    },
    speed: 1000,
    slidersPerView: 1,
    effect: 'fade',
  }
);

if (document.querySelector('.philosophy__section-second')) {
  const aesthetics = document.getElementById('aesthetics'),
    innovation = document.getElementById('innovation'),
    quality = document.getElementById('quality');

  swiperPhilosophySection2.on('slideChange', () => {
    if (swiperPhilosophySection2.activeIndex === 0) {
      aesthetics.classList.add('animation_icon-third');
      innovation.classList.add('animation_icon-first');
      quality.classList.add('animation_icon-second');
    } else if (swiperPhilosophySection2.activeIndex === 1) {
      aesthetics.classList.add('animation_icon-first');
      innovation.classList.add('animation_icon-second');
      quality.classList.add('animation_icon-third');
    } else if (swiperPhilosophySection2.activeIndex === 2) {
      aesthetics.classList.add('animation_icon-second');
      innovation.classList.add('animation_icon-third');
      quality.classList.add('animation_icon-first');
    }

    setTimeout(() => {
      innovation.classList.remove(
        'animation_icon-first',
        'animation_icon-second',
        'animation_icon-third'
      );
      aesthetics.classList.remove(
        'animation_icon-first',
        'animation_icon-second',
        'animation_icon-third'
      );
      quality.classList.remove(
        'animation_icon-first',
        'animation_icon-second',
        'animation_icon-third'
      );

      if (swiperPhilosophySection2.activeIndex === 0) {
        innovation.classList.remove('icon_first', 'icon_third');
        innovation.classList.add('icon_second', 'active');

        aesthetics.classList.remove('icon_second', 'icon_third', 'active');
        aesthetics.classList.add('icon_first');

        quality.classList.remove('icon_second', 'icon_first', 'active');
        quality.classList.add('icon_third');
      } else if (swiperPhilosophySection2.activeIndex === 1) {
        innovation.classList.remove('icon_first', 'icon_second', 'active');
        innovation.classList.add('icon_third');

        aesthetics.classList.remove('icon_first', 'icon_third');
        aesthetics.classList.add('icon_second', 'active');

        quality.classList.remove('icon_second', 'icon_third', 'active');
        quality.classList.add('icon_first');
      } else if (swiperPhilosophySection2.activeIndex === 2) {
        innovation.classList.remove('icon_second', 'icon_third', 'active');
        innovation.classList.add('icon_first');

        aesthetics.classList.remove('icon_first', 'icon_second', 'active');
        aesthetics.classList.add('icon_third');

        quality.classList.remove('icon_first', 'icon_third');
        quality.classList.add('icon_second', 'active');
      }
    }, 500);
  });
}

const swiperPhilosophySection3 = new Swiper('.swiper_philosophy-section-3', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  centeredSlides: true,
  spaceBetween: rem(1.7),
  initialSlide: 4,
  breakpoints: {
    769: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      centeredSlides: false,
      spaceBetween: rem(0),
    },
  },
});
