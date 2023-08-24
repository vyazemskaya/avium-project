wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: true,
  live: true,
})

wow.init()

$(document).ready(function () {
  $('select').niceSelect()
  // if ($('#fullpage').length && $(window).width() > 768) {
  //   $('#fullpage').fullpage({
  //     scrollOverflow: false,
  //     scrollSectionToBottomFromBottom: false,
  //     fitToSection: false,
  //   })
  // }
})

document.addEventListener('DOMContentLoaded', function () {
  const overlays = document.querySelectorAll('.overlay')
  overlays.forEach(overlay => {
    overlay.addEventListener('click', event => {
      const modal = overlay.querySelector('.modal')
      if (event.target === overlay) {
        overlay.style.display = 'none'
      }
    })
  })

  const checkbox = document.getElementById('burger-toggle')

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      document.querySelector('.header').style.backgroundColor = '#ffffff'
      document.body.style.overflow = 'hidden'
    } else {
      document.querySelector('.header').style.backgroundColor = '#f7f8fa'
      document.body.style.overflow = 'visible'
    }
  })

  document.querySelectorAll('.header .feedback-icon').forEach(element => {
    element.addEventListener('click', () => {
      document.querySelector('.header .overlay').style.display = 'block'
      document.body.style.overflow = 'hidden'
    })
  })

  document
    .querySelector('.header .overlay .modal_close-icon')
    .addEventListener('click', () => {
      document.querySelector('.header .overlay').style.display = 'none'
      document.body.style.overflow = 'visible'
    })

  //////////////////////////////Корзина//////////////////////////////////

  if (document.querySelector('.cart__section-second')) {
    document
      .querySelector(
        '.cart__section-second .cart__section-content .content_right .content_btn'
      )
      .addEventListener('click', () => {
        document.querySelector('.cart__section-second .overlay').style.display =
          'block'
        document.body.style.overflow = 'hidden'
      })

    document
      .querySelector('.cart__section-second .overlay .modal_close-icon')
      .addEventListener('click', () => {
        document.querySelector('.cart__section-second .overlay').style.display =
          'none'
        document.body.style.overflow = 'visible'
      })
  }

  ////////////////////////////////////////////////////////////////

  if (document.getElementById('cart')) {
    const cart = document.getElementById('cart'),
      cartSwapper = document.getElementById('cart_fixed-block')

    cartSwapper.querySelector('.content-btn').addEventListener('click', () => {
      const cartPosition = cart.getBoundingClientRect().top + window.scrollY

      // Перемещаем страницу к блоку #cart
      window.scrollTo({
        top: cartPosition - 100,
        behavior: 'smooth',
      })
    })

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === cart) {
          if (entry.isIntersecting) {
            // Блок targetBlock виден, делаем блок видимым
            if (window.innerWidth < 769) {
              cartSwapper.style.display = 'none'
            }
          } else {
            // Блок targetBlock не виден, скрываем блок
            if (window.innerWidth < 769) {
              cartSwapper.style.display = 'flex'
            }
          }
        }
      })
    })

    // Начать отслеживать видимость блока cart
    observer.observe(cart)
  }

  /////////////////////////////Коллекция Freedom///////////////////////////////////

  if (document.querySelector('.freedom__section-third')) {
    const paginationItems = document.querySelectorAll(
      '.freedom__section-third .pagination_item'
    )

    paginationItems.forEach(item => {
      item.addEventListener('click', () => {
        paginationItems.forEach(item => {
          item.classList.remove('active')
        })

        item.classList.add('active')
      })
    })
  }

  if (document.getElementById('freedom-toggle-btn')) {
    const freedomToggleButton = document.getElementById('freedom-toggle-btn')
    const paginationItems = document.querySelectorAll(
      '.freedom__section-third .pagination_item'
    )

    let expanded = false

    freedomToggleButton.addEventListener('click', function () {
      expanded = !expanded
      if (expanded) {
        paginationItems.forEach(function (item, index) {
          if (index >= 3) {
            item.style.display = 'flex'
          }
        })
        freedomToggleButton.textContent = 'Свернуть'
      } else {
        paginationItems.forEach(function (item, index) {
          if (index >= 3) {
            item.style.display = 'none'
          }
        })
        freedomToggleButton.textContent = 'Развернуть'
      }
    })
  }

  /////////////////////////////Сотрудничество///////////////////////////////////

  if (document.querySelector('.cooperation__section-third .content_form-btn')) {
    document
      .querySelector('.cooperation__section-third .content_form-btn')
      .addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(
          '.cooperation__section-third .overlay'
        ).style.display = 'block'
        document.body.style.overflow = 'hidden'
      })

    document
      .querySelector('.cooperation__section-third .overlay .modal_close-icon')
      .addEventListener('click', function () {
        document.querySelector(
          '.cooperation__section-third .overlay'
        ).style.display = 'none'
        document.body.style.overflow = 'visible'
      })
  }

  /////////////////////////////Калькулятор///////////////////////////////////

  if (document.querySelector('.calculate__section')) {
    document.querySelectorAll('[name=group_first]').forEach(element => {
      element.addEventListener('change', () => {
        document
          .querySelectorAll('.calculate__section .content_calculate-box')
          .forEach(item => {
            item.classList.add('deactive')
          })
        document.getElementById(element.value).classList.remove('deactive')
      })
    })

    document
      .querySelector(
        '.calculate__section .calculate__section-content .content_left .content_btn'
      )
      .addEventListener('click', () => {
        if (document.getElementById('default_calculate').checked) {
          document.querySelector('.calculate__section .overlay').style.display =
            'block'
          document.querySelector(
            '.calculate__section .overlay .modal_default'
          ).style.display = 'block'
          document.body.style.overflow = 'hidden'
        } else if (document.getElementById('advanced_calculate').checked) {
          document.querySelector('.calculate__section .overlay').style.display =
            'block'
          document.querySelector(
            '.calculate__section .overlay .modal_advanced'
          ).style.display = 'block'
          document.body.style.overflow = 'hidden'
        }
      })

    document
      .querySelector(
        '.calculate__section .overlay .modal_default .modal_close-icon'
      )
      .addEventListener('click', () => {
        document.querySelector('.calculate__section .overlay').style.display =
          'none'
        document.querySelector(
          '.calculate__section .overlay .modal_default'
        ).style.display = 'none'
        document.body.style.overflow = 'visible'
      })

    document
      .querySelector('.calculate__section .overlay .modal_default .content_btn')
      .addEventListener('click', () => {
        document.querySelector('.calculate__section .overlay').style.display =
          'none'
        document.querySelector(
          '.calculate__section .overlay .modal_default'
        ).style.display = 'none'
        document.body.style.overflow = 'visible'
      })

    document
      .querySelector(
        '.calculate__section .overlay .modal_advanced .modal_close-icon'
      )
      .addEventListener('click', () => {
        document.querySelector('.calculate__section .overlay').style.display =
          'none'
        document.querySelector(
          '.calculate__section .overlay .modal_advanced'
        ).style.display = 'none'
        document.body.style.overflow = 'visible'
      })
  }

  /////////////////////////////Купить///////////////////////////////////

  if (document.querySelector('.purchase__section-first')) {
    let center = [48.8866527839977, 2.34310679732974]

    function init() {
      let map = new ymaps.Map('purchase_map', {
        center: center,
        zoom: 17,
      })

      let placemarkMain = new ymaps.Placemark(
        center,
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: './img/purchase_section-third/geomark-1.svg',
          iconImageSize: [70, 73],
        }
      )
      let placemarkSecondary = new ymaps.Placemark(
        [48.8879999999999, 2.34310679732999],
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: './img/purchase_section-third/geomark-2.svg',
          iconImageSize: [70, 73],
        }
      )

      map.controls.remove('geolocationControl') // удаляем геолокацию
      map.controls.remove('searchControl') // удаляем поиск
      map.controls.remove('trafficControl') // удаляем контроль трафика
      map.controls.remove('typeSelector') // удаляем тип
      map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl') // удаляем контрол зуммирования
      map.controls.remove('rulerControl') // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']) // отключаем скролл карты (опционально)

      map.geoObjects.add(placemarkMain)
      map.geoObjects.add(placemarkSecondary)
    }

    ymaps.ready(init)
  }

  //////////////////////////////Детальная банка//////////////////////////////////

  if (document.querySelector('.details__section-first')) {
    document.querySelectorAll('.addToCart').forEach(element => {
      element.addEventListener('click', () => {
        document.querySelector(
          '.details__section-first .overlay'
        ).style.display = 'block'
        document.querySelector(
          '.details__section-first .overlay .modal_addToCart'
        ).style.display = 'block'
        document.body.style.overflow = 'hidden'
      })
    })

    document
      .querySelector(
        '.details__section-first .overlay .modal_addToCart .modal_close-icon'
      )
      .addEventListener('click', () => {
        document.querySelector(
          '.details__section-first .overlay'
        ).style.display = 'none'
        document.querySelector(
          '.details__section-first .overlay .modal_addToCart'
        ).style.display = 'none'
        document.body.style.overflow = 'visible'
      })

    document
      .querySelectorAll(
        '.details__section-first .overlay .modal_addToCart .content_btn'
      )
      .forEach(element => {
        element.addEventListener('click', () => {
          document.querySelector(
            '.details__section-first .overlay'
          ).style.display = 'none'
          document.querySelector(
            '.details__section-first .overlay .modal_addToCart'
          ).style.display = 'none'
          document.body.style.overflow = 'visible'
        })
      })

    if (document.querySelector('.details__section-first .choose_color-img')) {
      document
        .querySelector('.details__section-first .choose_color-img')
        .addEventListener('click', () => {
          document.querySelector(
            '.details__section-first .overlay'
          ).style.display = 'block'
          document.querySelector(
            '.details__section-first .overlay .modal_chooseColor'
          ).style.display = 'block'
          document.body.style.overflow = 'hidden'
        })

      document
        .querySelector(
          '.details__section-first .overlay .modal_chooseColor .modal_close-icon'
        )
        .addEventListener('click', () => {
          document.querySelector(
            '.details__section-first .overlay'
          ).style.display = 'none'
          document.querySelector(
            '.details__section-first .overlay .modal_chooseColor'
          ).style.display = 'none'
          document.body.style.overflow = 'visible'
        })
    }

    document.querySelectorAll('[name=group_second]').forEach(element => {
      element.addEventListener('change', () => {
        document
          .querySelectorAll('.details__section-second .information_box')
          .forEach(item => {
            item.classList.add('deactive')
          })
        document.getElementById(element.value).classList.remove('deactive')
      })
    })

    window.screen.width >= 769 &&
      document
        .querySelectorAll(
          '.details__section-second .swiper_certificates .swiper-slide'
        )
        .forEach(element => {
          element.addEventListener('click', () => {
            document.querySelector(
              '.details__section-second .overlay'
            ).style.display = 'block'
            let imageSrc = element
              .querySelector('.slide-certificates img')
              .getAttribute('src')
            console.log(imageSrc)
            document.querySelector(
              '.details__section-second .overlay .certificates_img-inModal'
            ).src = imageSrc
          })
        })

    document
      .querySelector(
        '.details__section-second .overlay .modal .modal_close-icon'
      )
      .addEventListener('click', () => {
        document.querySelector(
          '.details__section-second .overlay'
        ).style.display = 'none'
      })

    if (screen.width < 769) {
      $(document).ready(function () {
        var secondSection = $('.details__section-second')
        var fixedBlock = $('.fixed-block')

        $(window).scroll(function () {
          var scrollPosition = $(window).scrollTop()
          var sectionOffset =
            secondSection.offset().top + secondSection.height() - 500

          if (scrollPosition >= sectionOffset) {
            fixedBlock.hide()
          } else {
            fixedBlock.show()
          }
        })
      })
    }
  }

  //////////////////////////////Философия//////////////////////////////////

  if (document.querySelector('.philosophy__section-sixth')) {
    document
      .getElementById('video-collection')
      .addEventListener('ended', () => {
        document.querySelector(
          '.philosophy__section-sixth .container-video'
        ).style.display = 'none'
        document.querySelector(
          '.philosophy__section-sixth .container'
        ).style.display = 'block'
      })

    document
      .querySelector('.philosophy__section-sixth .container .content_btn')
      .addEventListener('click', () => {
        document.querySelector(
          '.philosophy__section-sixth .container-video'
        ).style.display = 'block'
        document.getElementById('video-collection').play()
        document.querySelector(
          '.philosophy__section-sixth .container'
        ).style.display = 'none'
      })
  }

  //////////////////////////////Коллекция Forever Solution//////////////////////////////////

  if (document.querySelector('.solution__section-first')) {
    document
      .querySelectorAll('.solution__background-video video')
      .forEach(element => {
        element.addEventListener('ended', () => {
          document
            .querySelector('.solution__section-first .content_btn')
            .classList.remove('shadowEffect')
        })
      })
  }

  //////////////////////////////Главная//////////////////////////////////

  if (document.querySelector('.main__section-first')) {
    $(window).on('load', function () {
      wow.init()
    })
  }

  if (document.querySelector('.main__section-fifth')) {
    document
      .querySelector('.main__section-fifth .btn')
      .addEventListener('click', () => {
        document.querySelector('.main__section-fifth .overlay').style.display =
          'block'
        document.body.style.overflow = 'hidden'
      })

    document
      .querySelector('.main__section-fifth .overlay .modal_close-icon')
      .addEventListener('click', () => {
        document.querySelector('.main__section-fifth .overlay').style.display =
          'none'
        document.body.style.overflow = 'visible'
      })
  }

  if (document.querySelector('.main__section-sixth')) {
    const circlesCenter = document.querySelector(
      '.main__section-sixth .circles_center'
    )
    const circles = document.querySelectorAll(
      '.main__section-sixth .circles_center .circle .circle_inside'
    )
    const circlesActions = document.querySelectorAll(
      '.main__section-sixth .circles_center .circle .circle_action'
    )
    let currentIndex = 0
    let cycleInterval

    console.log(circles)

    function activateCircle(index) {
      if (index >= 0 && index < circles.length) {
        circles.forEach(circle => circle.classList.remove('active'))
        currentIndex = index
        circles[currentIndex].classList.add('active')
      }
    }

    function autoCycle() {
      activateCircle(currentIndex)
      currentIndex = (currentIndex + 1) % circles.length
    }

    function stopCycle() {
      if (screen.width < 769) {
        clearInterval(cycleInterval)
      }
    }

    circlesCenter.addEventListener('mouseout', () => {
      circles[currentIndex].classList.remove('active')
    })

    circlesActions.forEach((circle, index) => {
      circle.addEventListener('mouseover', () => {
        stopCycle()
        activateCircle(index)
      })

      circle.addEventListener('click', () => {
        stopCycle()
        activateCircle(index)
      })
    })

    if (screen.width < 769) {
      cycleInterval = setInterval(autoCycle, 1500)
    }
  }

  // yearcolor
  if (document.getElementById('video-collection')) {
    const mmd = window.matchMedia('(min-width: 768px)').matches
    const md = window.matchMedia('(max-width: 768px)').matches
    gsap.defaults({ duration: 1 })
    gsap.set('.container_media', {
      xPercent: 50,
      yPercent: -50,
    })
    gsap.set('.video_cover', {
      'clip-path': md ? 'circle(62%)' : 'circle(75%)',
    })
    gsap.set('.section_first .content_outer-btn', { opacity: 0 })
    gsap.set('.section_first .decoration', { opacity: 0 })
    gsap.set('.section_first .content_title', { opacity: 0, xPercent: -100 })
    gsap.set('.section_first .container .section_content .content_text', {
      opacity: 0,
    })
    gsap.set('.section_first .container .section_content .content_btn', {
      opacity: 0,
    })

    document
      .getElementById('video-collection')
      .addEventListener('ended', () => {
        const tl1 = gsap.timeline()
        const tl2 = gsap.timeline()
        document.getElementById('video-collection').pause()

        gsap.to('.container_media .video_cover', {
          opacity: 1,
        })
        tl1.to('.container_media .video_cover', {
          'clip-path': md ? 'circle(42%)' : 'circle(31%)',
          opacity: 1,
          xPercent: md ? 37 : 30,
          yPercent: md ? -23 : -12,
          duration: 1.5,
          delay: 1.5,
          onEnd: () =>
            document.querySelector('.section_first').classList.add('_revealed'),
        })
        gsap.to('.container_media #video-collection', {
          opacity: 0,
        })
        tl1.to('.section_first .content_outer-btn', {
          opacity: 1,
        })
        if (md) {
          tl2.to('.section_first .decoration_mobile', { opacity: 1, delay: 3 })
        } else {
          gsap
            .timeline()
            .to('.section_first .decoration_left', { opacity: 1, delay: 4 })
          gsap
            .timeline()
            .to('.section_first .decoration_right', { opacity: 1, delay: 4 })
        }
        tl2.to('.section_first .content_title', {
          opacity: 1,
          xPercent: 0,
          delay: mmd ? 4 : 0,
        })
        tl2.to('.section_first .container .section_content .content_text', {
          opacity: 1,
        })
        tl2.to('.section_first .container .section_content .content_btn', {
          opacity: 1,
        })
      })
  }
  if (document.querySelector('.section_first')) {
    document
      .querySelector('.section_first .container .content_btn')
      .addEventListener('click', () => {
        document.querySelector(
          '.section_first .container_media'
        ).style.display = 'block'
        document.getElementById('video-collection').play()
        document.querySelector('.section_first .container').style.display =
          'none'
      })
  }
})

//////////////////////////////Коллекция Veripery//////////////////////////////////

if (document.querySelector('.veripery__section-first')) {
  let videos = document.getElementsByTagName('video')

  for (let i = 0; i < videos.length; i++) {
    let video = videos[i]
    video.play()
  }
}
