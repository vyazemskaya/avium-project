import {
  swiperMainSection1,
  swiperMainSection2,
  swiperMainSection3,
  swiperMainSection4,
} from './swiper.js'

const animItems = () => {
  const animItems = document.querySelectorAll('[data-animate]')
  if (animItems.length) {
    animItems.forEach(item => {
      item.classList.add('wow')
    })
  }
}
if (!document.getElementById('fullpage')) {
  animItems()
}

document.addEventListener('DOMContentLoaded', function () {
  gsap.defaults({
    duration: 1,
    delay: 0.5,
  })

  gsap.registerPlugin(ScrollTrigger)

  if (document.querySelector('.section_animate')) {
    const sectionAnimate = document.querySelector('.section_animate')
    const sectionAnimateWrap = sectionAnimate.querySelector('.section_wrap')
    const sectionAnimateCircle = sectionAnimate.querySelector('#circle')
    const sectionAnimateTxt = sectionAnimate.querySelector('#txt')
    const sectionAnimateTl = sectionAnimate.querySelector('#tl')
    const sectionAnimateCircleSize =
      window.innerWidth > window.innerHeight
        ? window.innerWidth + 'vw'
        : window.innerHeight + 'vh'
    const header = document.querySelector('header')
    const rect = header.querySelector('.logotype').getBoundingClientRect()
    const tl1 = gsap.timeline()
    const tl2 = gsap.timeline()
    const md = window.matchMedia('(max-width: 768px)').matches

    gsap.set(header, { opacity: 0, visibility: 'hidden' })
    gsap.set('.bg', { display: 'none' })
    gsap.set(sectionAnimate, { display: 'block' })
    gsap.set(sectionAnimateWrap, {
      top: '50%',
      left: '50%',
      width: md ? 320 : 560,
      height: 'auto',
      xPercent: -50,
      opacity: 0,
      visibility: 'hidden',
      yPercent: md ? -120 : -50,
    })
    gsap.set(sectionAnimateCircle, {
      left: '-50%',
      width: sectionAnimateCircleSize,
      height: sectionAnimateCircleSize,
      xPercent: -50,
      yPercent: 50,
    })
    gsap.set(sectionAnimateTxt, {
      left: '-100%',
      xPercent: 0,
      y: md ? -10 : 120,
      opacity: 0,
      visibility: 'hidden',
    })
    gsap.set(sectionAnimateTl, {
      height: md ? 'calc((100vh + 127%) / 2)' : 'calc((100vh - 20%) / 2)',
    })

    tl1.to(
      sectionAnimateWrap,
      { opacity: 1, visibility: 'visible', delay: 1 },
      0
    )
    tl1.to(
      sectionAnimateTxt,
      {
        left: '50%',
        xPercent: -50,
        opacity: 1,
        visibility: 'visible',
        duration: 2.5,
        delay: 1,
      },
      0
    )
    tl1.to(
      sectionAnimateTl,
      {
        height: '61%',
        duration: 2.5,
        delay: 1,
        onEnd: () => {
          tl2.to(header, { opacity: 1, visibility: 'visible' })
          tl2.to(
            sectionAnimateWrap,
            {
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
              xPercent: 0,
              yPercent: 0,
              duration: 0.5,
              delay: md ? 3.8 : 4,
              // onStart: () => {
              //   tl2.to(
              //     '.section_wrap path',
              //     {
              //       fill: '#000',
              //       duration: 0.5,
              //     },
              //     0
              //   )
              //   tl2.to(
              //     sectionAnimateTl,
              //     {
              //       backgroundColor: '#000',
              //       duration: 0.5,
              //     },
              //     0
              //   )
              // },
            },
            0
          )
          tl2.to(
            '.section_wrap path',
            {
              fill: '#000',
              duration: 0.3,
              delay: md ? 3.9 : 4.1,
              onStart: () => {
                gsap.to(
                  sectionAnimateTl,
                  {
                    opacity: 0,
                    visibility: 'hidden',
                    duration: 0.5,
                  },
                  0
                )
                gsap.to(
                  sectionAnimateWrap,
                  {
                    opacity: 0,
                    visibility: 'hidden',
                    duration: 0.5,
                    delay: 4.2,
                  },
                  0
                )
              },
            },
            0
          )
          // tl2.to(
          //   sectionAnimateWrap,
          //   {
          //     opacity: 0,
          //     visibility: 'hidden',
          //     duration: 0.5,
          //     delay: md ? 4 : 4.2,
          //   },
          //   0
          // )
          tl2.to(
            sectionAnimateCircle,
            {
              width: 0,
              height: 0,
              left: 0,
              duration: 1,
              delay: 3.5,
            },
            0
          )
          tl2.to(
            sectionAnimateTxt,
            {
              opacity: 0,
              duration: 0.1,
              delay: md ? 3.8 : 4,
            },
            0
          )
          tl2.to(
            sectionAnimateCircle,
            {
              opacity: 0,
              duration: 1.5,
              delay: 4,
              onComplete: () => {
                if (!document.getElementById('fullpage')) {
                  document.querySelector('body').style.overflow = 'auto'
                }
                sectionAnimate.classList.add('_hidden')
              },
            },
            0
          )
        },
      },
      0
    )
  }

  if (document.getElementById('fullpage')) {
    console.log('log')
    if (window.matchMedia('(min-width:767.98px)').matches) {
      gsap.set('.fadeIn', { opacity: 0 })
      gsap.set('.fadeInLeft', { opacity: 0, xPercent: -100 })
      gsap.set('.fadeInDown', { opacity: 0, yPercent: -100 })
      gsap.set('.zoomIn', { opacity: 0, scale: 0 })
      ScrollTrigger.observe({
        type: 'wheel,touch,scroll,pointer',
        target: '.section.active',
        onChange: () => {
          if (document.querySelector('.main__section-first.active')) {
            swiperMainSection1.autoplay.start()
            gsap.to('.swiper_main-section-1', {
              opacity: 1,
              yPercent: 0,
              delay: 0.5,
            }),
              gsap.to('.title1_section-1', {
                opacity: 1,
                xPercent: 0,
                delay: 0.5,
              }),
              gsap.to('.title2_section-1', { opacity: 1, delay: 1.5 }),
              gsap.to('.title3_section-1', { opacity: 1, delay: 1.8 }),
              gsap.to('.btn_section-1', { opacity: 1, delay: 2 })
          }
          if (document.querySelector('.main__section-second.active')) {
            swiperMainSection2.autoplay.start()
            gsap.to('.main__section-second .content_left', {
              opacity: 1,
            }),
              gsap.to('.main__section-second .icon_wrap', {
                opacity: 1,
              })
            gsap.to('.main__section-content .title_mobile', {
              opacity: 1,
              yPercent: 0,
            }),
              gsap.to('.main__section-second .content_right .title', {
                opacity: 1,
                yPercent: 1,
              }),
              gsap.to('.main__section-second .swiper-slide .subtitle', {
                opacity: 1,
                delay: 1.3,
              }),
              gsap.to('.main__section-second .swiper-slide .text', {
                opacity: 1,
                delay: 1.5,
              })
            gsap.to('.main__section-second  .btn', {
              opacity: 1,
              delay: 1.8,
            })
          }
          if (document.querySelector('.main__section-third.active')) {
            swiperMainSection3.autoplay.start()
            gsap.to('.main__section-third .left_block .text', {
              opacity: 1,
              yPercent: 0,
            })
            gsap.to('.main__section-third .left_block .subtitle_span', {
              opacity: 1,
              delay: 1.3,
            })
            gsap.to('.main__section-third .left_block .subtitle', {
              opacity: 1,
              delay: 1.3,
            })
            gsap.to('.main__section-third .left_block .btn', {
              opacity: 1,
              delay: 1.5,
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
            swiperMainSection4.autoplay.start()
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
            gsap.to('.main__section-fourth .right_block .pots-value', {
              opacity: 1,
              delay: 1.3,
            })
            gsap.to('.main__section-fourth .right_block .text_block', {
              opacity: 1,
              delay: 1.5,
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
    } else {
      animItems()
    }
  }
})
