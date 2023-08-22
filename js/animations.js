import {
  swiperMainSection1,
  swiperMainSection2,
  swiperMainSection3,
  swiperMainSection4,
} from './swiper.js'

if (document.querySelector('.section_animate')) {
  document.querySelector('body').style.overflow = 'hidden'

}
document.addEventListener('DOMContentLoaded', function (event) {
  window.onload = function () {
    window.requestAnimationFrame(function () {
      const mmd = window.matchMedia('(min-width: 768px)').matches
      const md = window.matchMedia('(max-width: 768px)').matches
      gsap.registerPlugin(ScrollTrigger)

      gsap.defaults({
        duration: 1,
      })

      if (mmd) {
        gsap.set('.main__section-first .title1_section-1', {
          x: '-100%',
        })
        gsap.set('.swiper_main-section-1', {
          y: '-100%',
        })
        gsap.set(
          '.main__section-second .container .main__section-content .content_right .title',
          {
            y: '-100%',
          }
        )
        gsap.set('.main__section-fourth .photo_after', {
          xPercent: -100,
        })
        gsap.set('.main__section-fourth .right_block .title', {
          yPercent: -100,
        })
      }
      if (document.querySelector('.main__section-first')) {
        gsap.timeline({
          scrollTrigger: {
            trigger: '.main__section-first',
            scroller: 'body',
            scrub: !0,
            start: () => 'top top',
            end: () => 'bottom top',
            pin: mmd ? '.main__section-first' : false,
            onEnter: () => (md ? swiperMainSection1.autoplay.start() : null),
            onUpdate: self => {
              if (mmd) {
                if (self.progress > 0.25) {
                  gsap.to('.swiper_main-section-1', { opacity: 1, y: 0 })
                }
                if (self.progress > 0.35) {
                  gsap.to('.title1_section-1', {
                    opacity: 1,
                    x: 0,
                  })
                }
                if (self.progress > 0.55) {
                  gsap.to('.title2_section-1', {
                    opacity: 1,
                    delay: 0.5,
                  })
                }
                if (self.progress > 0.75) {
                  swiperMainSection1.autoplay.start()
                  gsap.to('.title3_section-1', {
                    opacity: 1,
                    delay: 0.5,
                  })
                  gsap.to('.btn_section-1', {
                    opacity: 1,
                    delay: 0.5,
                  })
                }
              }
            },
            onLeave: function (self) {
              if (mmd) {
                self.scroll(self.start)
                self.disable()
                self.animation.progress(1)
              }
              ScrollTrigger.refresh()
            },
          },
          ease: 'none',
        })
      }
      if (document.querySelector('.main__section-second')) {
        gsap.timeline({
          scrollTrigger: {
            trigger: '.main__section-second',
            scroller: 'body',
            scrub: !0,
            start: () => '-100px top',
            end: () => 'bottom top',
            pin: mmd ? '.main__section-second' : false,
            onEnter: () => (md ? swiperMainSection2.autoplay.start() : null),
            onUpdate: self => {
              if (mmd) {
                if (self.progress > 0.25) {
                  gsap.to('.main__section-second .content_left', { opacity: 1 })
                }
                if (self.progress > 0.35) {
                  gsap.to('.main__section-second .content_right .title', {
                    opacity: 1,
                    y: 0,
                  })
                }
                if (self.progress > 0.55) {
                  gsap.to('.main__section-second .content_right .subtitle', {
                    opacity: 1,
                  })
                }
                if (self.progress > 0.75) {
                  gsap.to('.main__section-second .content_right .text', {
                    opacity: 1,
                  })
                }
                if (self.progress > 0.85) {
                  swiperMainSection2.autoplay.start()
                  gsap.to('.main__section-second .btn', {
                    opacity: 1,
                  })
                }
              }
            },
            onLeave: function (self) {
              if (mmd) {
                self.scroll(self.start)
                self.disable()
                self.animation.progress(1)
              }
              ScrollTrigger.refresh()
            },
          },
          ease: 'none',
        })
      }
      if (document.querySelector('.main__section-third')) {
        gsap.timeline({
          scrollTrigger: {
            trigger: '.main__section-third',
            scroller: 'body',
            scrub: !0,
            start: () => 'top top',
            end: () => 'bottom top',
            onEnter: () => swiperMainSection3.autoplay.start(),
          },
          ease: 'none',
        })
      }
      if (document.querySelector('.main__section-fourth')) {
        gsap.timeline({
          scrollTrigger: {
            trigger: '.main__section-fourth',
            scroller: 'body',
            scrub: !0,
            start: () => 'top top',
            end: () => 'bottom top',
            pin: mmd ? '.main__section-fourth' : false,
            onEnter: () => (md ? swiperMainSection4.autoplay.start() : null),
            onUpdate: self => {
              if (mmd) {
                if (self.progress > 0.35) {
                  gsap.to('.main__section-fourth .photo_after', {
                    opacity: 1,
                    xPercent: 0,
                  })
                }

                if (self.progress > 0.25) {
                  gsap.to('.main__section-fourth .photo_before', {
                    opacity: 1,
                  })
                  gsap.to('.main__section-fourth .right_block .title', {
                    opacity: 1,
                    yPercent: 0,
                  })
                }
                if (self.progress > 0.55) {
                  gsap.to('.main__section-fourth .right_block .pots-value', {
                    opacity: 1,
                  })
                }
                if (self.progress > 0.75) {
                  swiperMainSection4.autoplay.start()
                  gsap.to(
                    '.main__section-fourth .container .right_block .text_block',
                    {
                      opacity: 1,
                    }
                  )
                }
              }
            },
            onLeave: function (self) {
              if (mmd) {
                self.scroll(self.start)
                self.disable()
                self.animation.progress(1)
              }
              ScrollTrigger.refresh()
            },
          },
          ease: 'none',
        })
      }
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
          duration: 1,
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
          document.querySelector('body').style.overflow = 'auto'
          document.querySelector('.section_animate').classList.add('_hidden')
          ScrollTrigger.refresh()
        }, 5000)
        ScrollTrigger.refresh()
      }
    })
  }
})

if (md) {
  const animItems = document.querySelectorAll('[data-animate]')
  animItems.forEach(item => {
    item.classList.add('wow')
  })
}
