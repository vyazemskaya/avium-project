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
  $('body').on('click touchstart', function () {
    const videoElement = document.getElementById('video-collection')
    if (!videoElement.playing) {
      videoElement.play()
    }
  })

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

  // yearcolor page
  if (document.querySelector('.section_first')) {
    const videoSection = document.querySelector('.section_first')
    const video = document.getElementById('video-collection')
    const playBtn = document.querySelector('.content_outer-btn')
    const closeBtn = videoSection.querySelector('#close-video')
    const videoWrap = videoSection.querySelector('.container_media')
    const md = window.matchMedia('(max-width: 768px)').matches
    const mmd = window.matchMedia('(min-width: 768px)').matches
    const mm = gsap.matchMedia()
    const tl1 = gsap.timeline()
    const tl2 = gsap.timeline()

    if (window.matchMedia('(min-width: 768px)').matches) {
      video.play()
    }
    gsap.defaults({ duration: 1 })
    gsap.set(videoWrap, { opacity: 0, visibility: 'hidden' })
    gsap.to(videoWrap, { opacity: 1, visibility: 'visible', delay: 2 })

    gsap.set(
      videoWrap,
      {
        yPercent: md ? -23 : -17,
        xPercent: md ? 38 : 5,
        right: 0,
        top: 0,
        width: md ? '89.3rem' : '110.9rem',
        height: md ? '89.3rem' : '110.9rem',
        'border-radius': '50%',
      },
      0
    )
    gsap.set(
      video,
      {
        width: md ? '67%' : '100%',
        height: md ? '82%' : '100%',
      },
      0
    )
    gsap.set(closeBtn, { opacity: 0, visibility: 'hidden' }, 0)

    document.addEventListener('click', function (e) {
      mm.add('(max-width: 768px)', () => {
        if (
          e.target.closest('.content_outer-btn') &&
          !videoSection.classList.contains('_fw')
        ) {
          videoSection.classList.add('_fw')
          tl2.kill()
          tl1.to(closeBtn, { opacity: 1, visibility: 'visible' }, 0)
          tl1.to(
            video,
            { width: '100%', height: '100%', duration: 0, delay: 0 },
            0
          )
          tl1.to('header', { yPercent: -100, duration: 0, delay: 0 }, 0)
          tl1.to('body', { overflow: 'hidden', duration: 0, delay: 0 }, 0)
          tl1.to(
            videoWrap,
            {
              position: 'fixed',
              width: '100vh',
              height: '100vw',
              yPercent: -50,
              rotate: 90,
              xPercent: 50,
              right: '50%',
              top: '50%',
              'border-radius': 0,
              duration: 0,
              delay: 0,
            },
            0
          )
          tl1.to(
            playBtn,
            {
              opacity: 0,
              visibility: 'hidden',
              delay: 0,
            },
            0
          )
        } else if (
          e.target.closest('.section_first #close-video') &&
          videoSection.classList.contains('_fw')
        ) {
          videoSection.classList.remove('_fw')
          tl1.kill()
          tl2.to(
            video,
            {
              width: '67%',
              height: '82%',
              duration: 0,
              delay: 0,
            },
            0
          )
          tl2.to(
            videoWrap,
            {
              position: 'absolute',
              yPercent: -23,
              xPercent: 38,
              top: 0,
              rotate: 0,
              right: 0,
              width: '89.3rem',
              height: '89.3rem',
              'border-radius': '50%',
              duration: 0,
              delay: 0,
            },
            0
          )
          tl2.to('header', { yPercent: 0, duration: 0, delay: 0 }, 0)
          tl2.to('body', { overflow: 'visible', duration: 0, delay: 0 }, 0)
          tl2.to(
            playBtn,
            {
              opacity: 1,
              visibility: 'visible',
              delay: 0,
            },
            0
          )
        }
      })
      mm.add('(min-width: 768px)', () => {
        if (
          e.target.closest('.content_outer-btn') &&
          !videoSection.classList.contains('_fw')
        ) {
          videoSection.classList.add('_fw')
          tl2.kill()
          tl1.to(
            videoWrap,
            {
              width: '100%',
              height: '100%',
              yPercent: 0,
              xPercent: 0,
              'border-radius': 0,
              delay: 0,
            },
            0
          )
          tl1.to(
            playBtn,
            {
              opacity: 0,
              visibility: 'hidden',
              delay: 0,
            },
            0
          )
        } else if (videoSection.classList.contains('_fw')) {
          tl1.kill()
          tl2.to(
            videoWrap,
            {
              yPercent: -17,
              xPercent: 5,
              width: '110.9rem',
              height: '110.9rem',
              'border-radius': '50%',
              delay: 0,
            },
            0
          )
          tl2.to(
            playBtn,
            {
              opacity: 1,
              visibility: 'visible',
              delay: 1,
              onStart: () => {
                videoSection.classList.remove('_fw')
              },
            },
            0
          )
        }
      })
    })

    function getScreenOrientation() {
      if (
        window.innerHeight < window.innerWidth &&
        window.matchMedia('(max-width: 768px)').matches
      ) {
        gsap.to(
          videoWrap,
          {
            width: '100vw',
            height: '100vh',
            rotate: 0,
            duration: 0,
            delay: 0,
          },
          0
        )
      }
    }
    getScreenOrientation()
    window.addEventListener('resize', getScreenOrientation)

    const addSourceToVideo = (element, src) => {
      const source = document.createElement('source')
      source.src = src
      source.type = 'video/mp4'
      element.appendChild(source)
    }
    const initVideo = (element, src) => {
      const windowWidth = window.innerWidth
      if (windowWidth > 768) {
        addSourceToVideo(element, src.dataset.desktopVid)
      } else {
        addSourceToVideo(element, src.dataset.mobileVid)
      }
    }
    // gsapSet()
    // gsapInit()
    initVideo(video, video)
  }

  if (document.getElementById('fullpage')) {
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
