document.addEventListener('DOMContentLoaded', function (event) {
  const mmd = window.matchMedia('(min-width: 768px)').matches
  const md = window.matchMedia('(max-width: 768px)').matches

  gsap.defaults({
    duration: 1,
    delay: 0.5,
  })
  gsap.set('.fadeIn', { opacity: 0 })
  gsap.set('.fadeInLeft', { opacity: 0, xPercent: -100 })
  gsap.set('.fadeInDown', { opacity: 0, yPercent: -100 })
  gsap.set('.zoomIn', { opacity: 0, scale: 0 })

  window.onload = function () {
    window.requestAnimationFrame(function () {
      gsap.registerPlugin(ScrollTrigger)

      if (document.querySelector('.section_animate')) {
        const header = document.querySelector('header')
        const rect = header.querySelector('.logotype').getBoundingClientRect()
        gsap.timeline().to('.section_wrap', {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          xPercent: 0,
          yPercent: 0,
          opacity: 0,
          duration: 0.5,
          delay: 4,
        })
        gsap.timeline().to('#txt', {
          left: '50%',
          xPercent: -50,
          scale: 1,
          opacity: 1,
          duration: 2.5,
        })
        gsap.timeline().to('.section_wrap path', {
          fill: '#000',
          duration: 0.5,
          delay: 4,
        })
        gsap.timeline().to('#tl', { height: '61%', duration: 2.5 })
        gsap.timeline().to('#txt', {
          opacity: 0,
          duration: 0.5,
          delay: 4,
        })
        gsap.timeline().to('#circle', {
          width: 0,
          height: 0,
          left: 0,
          duration: 1,
          delay: 3.5,
        })
        gsap.timeline().to('#circle', { opacity: 0, duration: 1.5, delay: 4 })
        setTimeout(() => {
          // document.querySelector('body').style.overflow = 'auto'
          document.querySelector('.section_animate').classList.add('_hidden')
        }, 5000)
      }
    })
  }

  ScrollTrigger.observe({
    type: 'wheel,touch',
    target: '.section.active',
    onDown: () => {
      if (document.querySelector('.main__section-first.active')) {
        gsap.to('.swiper_main-section-1', {
          opacity: 1,
          yPercent: 0,
        }),
          gsap.to('.title1_section-1', { opacity: 1, xPercent: 0 }),
          gsap.to('.title2_section-1', { opacity: 1, delay: 1.5 }),
          gsap.to('.title3_section-1', { opacity: 1, delay: 1.8 }),
          gsap.to('.btn_section-1', { opacity: 1, delay: 2 })
      }
      if (document.querySelector('.main__section-second.active')) {
        const tl = gsap.timeline()
        tl.to('.main__section-second .content_left', {
          opacity: 1,
        }),
          tl.to('.main__section-second .icon_wrap', {
            opacity: 1,
          })
        gsap.to('.main__section-content .title_mobile', {
          opacity: 1,
          yPercent: 0,
        }),
          gsap.to('.main__section-second .content_right .title', {
            opacity: 1,
            yPercent: 0,
          }),
          gsap.to('.main__section-second .swiper-slide .subtitle', {
            opacity: 1,
            delay: 1.5,
          }),
          gsap.to('.main__section-second .swiper-slide .text', {
            opacity: 1,
            delay: 1.7,
          })
        gsap.to('.main__section-second  .btn', {
          opacity: 1,
          delay: 2,
        })
      }
      if (document.querySelector('.main__section-third.active')) {
        gsap.to('.main__section-third .left_block .text', {
          opacity: 1,
          yPercent: 0,
        })
        gsap.to('.main__section-third .left_block .subtitle_span', {
          opacity: 1,
          delay: 1.5,
        })
        gsap.to('.main__section-third .left_block .subtitle', {
          opacity: 1,
          delay: 2,
        })
        gsap.to('.main__section-third .left_block .btn', {
          opacity: 1,
          delay: 2.5,
        })
        gsap.to('.main__section-third .right_block .img_block', {
          opacity: 1,
          scale: 1,
        })
        gsap.to('.main__section-third .swiper-pagination', {
          opacity: 1,
          delay: 1.5,
        })
      }
      if (document.querySelector('.main__section-fourth.active')) {
        gsap.to('.main__section-fourth .photo_after', {
          opacity: 1,
          xPercent: 0,
        })
        gsap.to('.main__section-fourth .photo_before', {
          opacity: 1,
        })
        gsap.to('.main__section-fourth .right_block .title', {
          opacity: 1,
          yPercent: 0,
        })
        gsap.to('.main__section-fourth .right_block .text_block', {
          opacity: 1,
        })
      }
      if (document.querySelector('.main__section-fifth.active')) {
        gsap.to('.main__section-fifth .container', {
          opacity: 1,
          yPercent: 0,
        })
        gsap.to('.main__section-fifth .main__section-content', {
          opacity: 1,
          delay: 1.5,
        })
      }
      if (document.querySelector('.main__section-sixth.active')) {
        gsap.to('.main__section-sixth .circles_left', {
          opacity: 1,
        })
        gsap.to('.main__section-sixth .circles_center', {
          opacity: 1,
          scale: 1,
        })
        gsap.to('.main__section-sixth .circles_right', {
          opacity: 1,
        })
      }
    },
    preventDefault: true,
  })
})
