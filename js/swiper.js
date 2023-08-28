const rem = function (rem) {
  if (window.innerWidth > 768) {
    return 0.005208335 * window.innerWidth * rem
  } else {
    // где 375 это ширина моб версии макета
    return (100 / 375) * (0.1 * window.innerWidth) * rem
  }
}

const swiperSolutionSection2 = new Swiper('.swiper_solution-section-second', {
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination_section-2',
  },
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
})

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
    pagination: {
      el: '.swiper-pagination_section-3',
    },
  }
)

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
})

const swiperDetailsCertificates = new Swiper('.swiper_certificates', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: '.swiper-pagination_certificates',
  },
  // centeredSlides: true,
  // spaceBetween: rem(1),
  breakpoints: {
    769: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: rem(5),
    },
  },
})

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
)

if (document.querySelector('.philosophy__section-second')) {
  const aesthetics = document.getElementById('aesthetics'),
    innovation = document.getElementById('innovation'),
    quality = document.getElementById('quality')

  swiperPhilosophySection2.on('slideChange', () => {
    if (swiperPhilosophySection2.activeIndex === 0) {
      aesthetics.classList.add('animation_icon-third')
      innovation.classList.add('animation_icon-first')
      quality.classList.add('animation_icon-second')
    } else if (swiperPhilosophySection2.activeIndex === 1) {
      aesthetics.classList.add('animation_icon-first')
      innovation.classList.add('animation_icon-second')
      quality.classList.add('animation_icon-third')
    } else if (swiperPhilosophySection2.activeIndex === 2) {
      aesthetics.classList.add('animation_icon-second')
      innovation.classList.add('animation_icon-third')
      quality.classList.add('animation_icon-first')
    }

    setTimeout(() => {
      innovation.classList.remove(
        'animation_icon-first',
        'animation_icon-second',
        'animation_icon-third'
      )
      aesthetics.classList.remove(
        'animation_icon-first',
        'animation_icon-second',
        'animation_icon-third'
      )
      quality.classList.remove(
        'animation_icon-first',
        'animation_icon-second',
        'animation_icon-third'
      )

      if (swiperPhilosophySection2.activeIndex === 0) {
        innovation.classList.remove('icon_first', 'icon_third')
        innovation.classList.add('icon_second', 'active')

        aesthetics.classList.remove('icon_second', 'icon_third', 'active')
        aesthetics.classList.add('icon_first')

        quality.classList.remove('icon_second', 'icon_first', 'active')
        quality.classList.add('icon_third')
      } else if (swiperPhilosophySection2.activeIndex === 1) {
        innovation.classList.remove('icon_first', 'icon_second', 'active')
        innovation.classList.add('icon_third')

        aesthetics.classList.remove('icon_first', 'icon_third')
        aesthetics.classList.add('icon_second', 'active')

        quality.classList.remove('icon_second', 'icon_third', 'active')
        quality.classList.add('icon_first')
      } else if (swiperPhilosophySection2.activeIndex === 2) {
        innovation.classList.remove('icon_second', 'icon_third', 'active')
        innovation.classList.add('icon_first')

        aesthetics.classList.remove('icon_first', 'icon_second', 'active')
        aesthetics.classList.add('icon_third')

        quality.classList.remove('icon_first', 'icon_third')
        quality.classList.add('icon_second', 'active')
      }
    }, 500)
  })
}

const swiperPhilosophySection3 = new Swiper('.swiper_philosophy-section-3', {
  slidesPerView: 5,
  slidesPerGroup: 1,
  centeredSlides: true,
  touchRatio: 0.25,
  spaceBetween: rem(0.8),
  initialSlide: 2,
  pagination: {
    el: '.swiper-pagination_section-3',
  },
  breakpoints: {
    769: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      centeredSlides: false,
      spaceBetween: rem(0),
    },
  },
})

// swiperPhilosophySection3.on('slideChangeTransitionEnd', function () {
//   if (window.innerWidth < 769) {
//     // Удаляем класс active со всех слайдов
//     $('.swiper-slide').removeClass('active');
//     // Добавляем класс active к текущему активному слайду
//     $('.swiper-slide-active').addClass('active');
//   }
// });

// swiperPhilosophySection3.on('transitionEnd', function () {
//   if (window.innerWidth < 769) {
//     // Удаляем класс active со всех слайдов
//     $('.swiper-slide').removeClass('active');
//     // Добавляем класс active к текущему активному слайду
//     $('.swiper-slide-active').addClass('active');
//   }
// });

// swiperPhilosophySection3.on('slideChange', function () {
//   if (window.innerWidth < 769) {
//     $('.swiper-slide').removeClass('active');
//   }
// });

export const swiperMainSection1 = new Swiper('.swiper_main-section-1', {
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  slidesPerView: 1,
  // loop: true,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  effect: 'fade',
  on: {
    afterInit: swiper => {
      swiper.autoplay.stop()
      swiper.update()
    },
  },
})

export const swiperMainSection2 = new Swiper('.swiper_main-section-2', {
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination_section-2',
  },
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
  // on: {
  //   afterInit: swiper => {
  //     swiper.autoplay.stop()
  //     swiper.update()
  //   },
  // },
})

const comfort = document.getElementById('comfort'),
  perfect = document.getElementById('perfect'),
  truetron = document.getElementById('truetron')

swiperMainSection2.on('slideChange', () => {
  if (window.innerWidth > 768) {
    if (swiperMainSection2.activeIndex === 0) {
      truetron.classList.add('animation_icon-third')
      comfort.classList.add('animation_icon-first')
      perfect.classList.add('animation_icon-second')
    } else if (swiperMainSection2.activeIndex === 1) {
      truetron.classList.add('animation_icon-first')
      comfort.classList.add('animation_icon-second')
      perfect.classList.add('animation_icon-third')
    } else if (swiperMainSection2.activeIndex === 2) {
      truetron.classList.add('animation_icon-second')
      comfort.classList.add('animation_icon-third')
      perfect.classList.add('animation_icon-first')
    }
  } else {
    if (swiperMainSection2.activeIndex === 0) {
      truetron.classList.add('animation_icon-thirdMobile')
      comfort.classList.add('animation_icon-firstMobile')
      perfect.classList.add('animation_icon-secondMobile')
    } else if (swiperMainSection2.activeIndex === 1) {
      truetron.classList.add('animation_icon-firstMobile')
      comfort.classList.add('animation_icon-secondMobile')
      perfect.classList.add('animation_icon-thirdMobile')
    } else if (swiperMainSection2.activeIndex === 2) {
      truetron.classList.add('animation_icon-secondMobile')
      comfort.classList.add('animation_icon-thirdMobile')
      perfect.classList.add('animation_icon-firstMobile')
    }
  }
  setTimeout(() => {
    comfort.classList.remove(
      'animation_icon-first',
      'animation_icon-second',
      'animation_icon-third',
      'animation_icon-firstMobile',
      'animation_icon-secondMobile',
      'animation_icon-thirdMobile'
    )
    truetron.classList.remove(
      'animation_icon-first',
      'animation_icon-second',
      'animation_icon-third',
      'animation_icon-firstMobile',
      'animation_icon-secondMobile',
      'animation_icon-thirdMobile'
    )
    perfect.classList.remove(
      'animation_icon-first',
      'animation_icon-second',
      'animation_icon-third',
      'animation_icon-firstMobile',
      'animation_icon-secondMobile',
      'animation_icon-thirdMobile'
    )

    if (swiperMainSection2.activeIndex === 0) {
      comfort.classList.remove('icon_first', 'icon_third')
      comfort.classList.add('icon_second', 'active')

      truetron.classList.remove('icon_second', 'icon_third', 'active')
      truetron.classList.add('icon_first')

      perfect.classList.remove('icon_second', 'icon_first', 'active')
      perfect.classList.add('icon_third')
    } else if (swiperMainSection2.activeIndex === 1) {
      comfort.classList.remove('icon_first', 'icon_second', 'active')
      comfort.classList.add('icon_third')

      truetron.classList.remove('icon_first', 'icon_third')
      truetron.classList.add('icon_second', 'active')

      perfect.classList.remove('icon_second', 'icon_third', 'active')
      perfect.classList.add('icon_first')
    } else if (swiperMainSection2.activeIndex === 2) {
      comfort.classList.remove('icon_second', 'icon_third', 'active')
      comfort.classList.add('icon_first')

      truetron.classList.remove('icon_first', 'icon_second', 'active')
      truetron.classList.add('icon_third')

      perfect.classList.remove('icon_first', 'icon_third')
      perfect.classList.add('icon_second', 'active')
    }
  }, 500)
})

export const swiperMainSection3 = new Swiper('.swiper_main-section-3', {
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination_section-3',
  },
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
  on: {
    afterInit: swiper => {
      swiper.autoplay.stop()
      swiper.update()
    },
  },
})

export const swiperMainSection4 = new Swiper('.swiper_main-section-4 ', {
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.swiper-pagination_section-4',
  },
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
  on: {
    afterInit: swiper => {
      swiper.autoplay.stop()
      swiper.update()
    },
  },
})

const swiperMainSection5 = new Swiper('.swiper_main-section-5', {
  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 1000,
  slidersPerView: 1,
  effect: 'fade',
})

swiperMainSection5.on('slideChange', x => {
  if (x.activeIndex == 2 || x.activeIndex == 1) {
    document
      .querySelector('.main__section-fifth .container .main__section-content')
      .classList.add('active')
  } else {
    document
      .querySelector('.main__section-fifth .container .main__section-content')
      .classList.remove('active')
  }
})

function isOnScreen(elem) {
	if( elem.length == 0 ) {
		return;
	}
	const $window = jQuery(window)
	const viewport_top = $window.scrollTop()
	const viewport_height = $window.height()
	const viewport_bottom = viewport_top + viewport_height
	const $elem = jQuery(elem)
	const top = $elem.offset().top
	const height = $elem.height()
	const bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}

jQuery( document ).ready( function() {
	window.addEventListener('scroll', function(e) {
		if( isOnScreen( jQuery( '.swiper_main-section-1') ) ) { 
			swiperMainSection1.autoplay.start()
 		}	
		if( isOnScreen( jQuery( '.swiper_main-section-2') ) ) { 
			swiperMainSection2.autoplay.start()
 		}	
		if( isOnScreen( jQuery( '.swiper_main-section-3') ) ) { 
			swiperMainSection3.autoplay.start()
 		}	
		if( isOnScreen( jQuery( '.swiper_main-section-4') ) ) { 
			swiperMainSection4.autoplay.start()
 		}	
	});
});
