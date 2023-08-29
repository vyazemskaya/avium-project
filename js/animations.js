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

const addSourceToVideo = (element, src) => {
  const source = document.createElement('source')
  source.src = src
  source.type = 'video/mp4'
  element.appendChild(source)
}
const initVideo = (element, src) => {
  if (!isMobile.any()) {
    addSourceToVideo(element, src.dataset.desktopVid)
  } else {
    addSourceToVideo(element, src.dataset.mobileVid)
  }
}

const openfullscreen = () => {
  // Trigger fullscreen
  if (document.getElementById('parent').requestFullscreen) {
    document.getElementById('parent').requestFullscreen()
  } else if (document.getElementById('parent').mozRequestFullScreen) {
    /* Firefox */
    document.getElementById('parent').mozRequestFullScreen()
  } else if (document.getElementById('parent').webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    document.getElementById('parent').webkitRequestFullscreen()
  } else if (document.getElementById('parent').webkitRequestFullScreen) {
    /* Chrome, Safari and Opera */
    document.getElementById('parent').webkitRequestFullScreen()
  } else if (document.getElementById('parent').msRequestFullscreen) {
    /* IE/Edge */
    document.getElementById('parent').msRequestFullscreen()
  }
}

const closefullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen()
  } else if (document.webkitExitFullScreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullScreen()
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen()
  }
}

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i)
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    )
  },
}
const gsapV = videoWrap => {
  if (window.innerHeight < window.innerWidth) {
    gsap.to(
      videoWrap,
      {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        rotate: 0,
        duration: 0,
        delay: 0,
        xPercent: 0,
        top: 0,
        right: 0,
        yPercent: 0,
        borderRadius: 0,
      },
      0
    )
  } else {
    gsap.to(
      videoWrap,
      {
        position: 'fixed',
        width: '100vh',
        height: '100vw',
        rotate: 90,
        duration: 0,
        delay: 0,
        xPercent: 50,
        yPercent: -50,
        top: '50%',
        right: '50%',
        borderRadius: 0,
      },
      0
    )
  }
}

// const getScreenOrientation = el => {
//   const tl = gsap.timeline()
//   if (document.querySelector('._fw')) {
//     if (window.innerHeight < window.innerWidth) {
//       tl.to(
//         el,
//         {
//           width: '100vw',
//           height: '100vh',
//           rotate: 0,
//           duration: 0,
//           delay: 0,
//         },
//         0
//       )
//     }
//   } else {
//     tl.kill()
//   }
// }

document.addEventListener('DOMContentLoaded', function () {
  const videos = []
  const videoYC = document.querySelector('.section_first video')
  const videoMP = document.querySelector('.video__section video')
  if (videoYC) {
    videos.push(videoYC)
  }
  if (videoMP) {
    videos.push(videoMP)
  }
  if (videos.length) {
    $('body').on('click touchstart', function () {
      videos.forEach(video => {
        if (isMobile.iOS()) {
          if (!video.playing) {
            video.play()
          }
        }
      })
    })
    if (!isMobile.iOS()) {
      videos.forEach(video => {
        if (!video.playing) {
          video.play()
        }
      })
    }
  }

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
                sectionAnimate.style.display = 'none'
              },
            },
            0
          )
        },
      },
      0
    )
  }

  if (document.querySelector('.section_first')) {
    const videoSection = document.querySelector('.section_first')
    const video = document.getElementById('video-collection')
    const playBtn = document.querySelector('.content_outer-btn')
    const closeBtn = videoSection.querySelector('#close-video')
    const videoWrap = videoSection.querySelector('.container_media')

    gsap.defaults({ duration: 1 })
    gsap.set(videoWrap, { opacity: 0, visibility: 'hidden' })

    const gsapSet = () => {
      gsap.set(
        videoWrap,
        {
          position: 'absolute',
          overflow: 'hidden',
          yPercent: isMobile.any() ? -23 : -17,
          xPercent: isMobile.any() ? 38 : 5,
          right: 0,
          top: 0,
          width: isMobile.any() ? '89.3rem' : '110.9rem',
          height: isMobile.any() ? '89.3rem' : '110.9rem',
          'border-radius': '50%',
        },
        0
      )
      gsap.set(
        video,
        {
          width: isMobile.any() ? '67%' : '100%',
          height: isMobile.any() ? '82%' : '100%',
        },
        0
      )
      gsap.set(closeBtn, { opacity: 0, visibility: 'hidden' }, 0)
    }
    const gsapInit = () => {
      gsap.to(videoWrap, { opacity: 1, visibility: 'visible', delay: 2 })
      if (isMobile.any()) {
        const tl1 = gsap.timeline()
        const tl2 = gsap.timeline()
        gsap.to(
          video,
          {
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '67%',
            height: '82%',
            duration: 0,
            delay: 0,
          },
          0
        )
        document.addEventListener('click', function (e) {
          if (
            e.target.closest('.content_outer-btn') &&
            !videoSection.classList.contains('_fw', 'mobile')
          ) {
            openfullscreen()
            videoSection.classList.add('_fw', 'mobile')
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
            window.addEventListener('resize', function () {
              gsapV(videoWrap)
            })
            gsapV(videoWrap)
          } else if (
            e.target.closest('.section_first #close-video') &&
            videoSection.classList.contains('_fw', 'mobile')
          ) {
            closefullscreen()
            videoSection.classList.remove('_fw', 'mobile')
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

            window.addEventListener('resize', function () {
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
            })

            if (window.matchMedia('(min-width: 768px)').matches) {
              tl2.to(
                video,
                {
                  width: '100%',
                  height: '100%',
                  left: 0,
                  bottom: 0,
                  duration: 0,
                  delay: 0,
                },
                0
              )
            }
          }
        })
      }
      if (!isMobile.any()) {
        document.addEventListener('click', function (e) {
          const tl1 = gsap.timeline()
          const tl2 = gsap.timeline()
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
                right: 0,
                top: 0,
                'border-radius': 0,
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
            window.addEventListener('resize', function () {
              tl1.to(
                videoWrap,
                {
                  width: '100%',
                  height: '100%',
                  yPercent: 0,
                  xPercent: 0,
                  right: 0,
                  top: 0,
                  'border-radius': 0,
                },
                0
              )
            })
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
            window.addEventListener('resize', function () {
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
            })
          }
        })
      }
    }

    gsapSet()
    gsapInit()
    initVideo(video, video)
  }

  if (document.querySelector('.philosophy__section-sixth')) {
    const videoSection = document.querySelector('.philosophy__section-sixth')
    const videoWrap = videoSection.querySelector('.container-video')
    const video = videoSection.querySelector('video')
    const closeBtn = videoSection.querySelector('#close-video')
    const md = window.matchMedia('(max-width: 768px)').matches
    video.play()

    document
      .getElementById('video-collection')
      .addEventListener('ended', () => {
        gsap.timeline().to('body', { overflow: 'visible' }, 0)
        document.querySelector(
          '.philosophy__section-sixth .container-video'
        ).style.display = 'none'
        document.querySelector(
          '.philosophy__section-sixth .container'
        ).style.display = 'block'
        gsap.to(
          '.philosophy__section-sixth .philosophy__section-content',
          {
            opacity: 1,
            visibility: 'visible',
          },
          0
        )
      })

    document.addEventListener('click', function (e) {
      const tl1 = gsap.timeline()
      const tl2 = gsap.timeline()
      if (
        e.target.closest(
          '.philosophy__section-sixth  .philosophy__section-content'
        )
      ) {
        document.querySelector(
          '.philosophy__section-sixth .container-video'
        ).style.display = 'block'
        document.querySelector(
          '.philosophy__section-sixth .container'
        ).style.display = 'none'
        document.getElementById('video-collection').play()

        if (isMobile.any()) {
          tl2.kill()
          openfullscreen()
          videoSection.classList.add('_fw')

          tl1.to(
            '.philosophy__section-sixth .philosophy__section-content',
            {
              opacity: 0,
              visibility: 'hidden',
              delay: 0,
            },
            0
          )
          tl1.to(closeBtn, { opacity: 1, visibility: 'visible' }, 0)
          tl1.to(
            video,
            { width: '100%', height: '100%', duration: 0, delay: 0 },
            0
          )
          tl1.to('header', { yPercent: -100, duration: 0, delay: 0 }, 0)
          tl1.to('body', { overflow: 'hidden', duration: 0, delay: 0 }, 0)
          tl1.to(
            'footer',
            { opacity: 0, visibility: 'hidden', duration: 0, delay: 0 },
            0
          )
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
          tl1.to('body', { overflow: 'hidden' }, 0)
          gsapV(videoWrap)
          window.addEventListener('resize', function () {
            gsapV(videoWrap)
          })
        }
        if (!isMobile.any()) {
          videoSection.classList.remove('_fw')
          gsap.timeline().to(
            '.philosophy__section-sixth .philosophy__section-content',
            {
              opacity: 0,
              visibility: 'hidden',
              delay: 0,
              duration: 0,
            },
            0
          )
        }
      } else if (
        e.target.closest('.philosophy__section-sixth #close-video') &&
        videoSection.classList.contains('_fw') &&
        isMobile.any()
      ) {
        tl1.kill()
        closefullscreen()
        tl2.to(closeBtn, { opacity: 0, visibility: 'hidden' }, 0)
        videoSection.classList.remove('_fw')
        tl2.to(
          'footer',
          { opacity: 1, visibility: 'visible', duration: 0, delay: 0 },
          0
        )

        tl2.to(
          '.philosophy__section-sixth .philosophy__section-content',
          {
            opacity: 1,
            visibility: 'visible',
          },
          0
        )
        tl2.to(
          '.philosophy__section-sixth .content_btn',
          {
            opacity: 1,
            visibility: 'visible',
          },
          0
        )

        tl2.to(
          videoWrap,
          {
            position: 'static',
            top: 0,
            right: 0,
            width: '100%',
            xPercent: 0,
            rotate: 0,
            yPercent: 0,
            height: '99.5rem',
            'z-index': 1,
            duration: 0,
          },
          0
        )
        tl2.to('body', { overflow: 'visible' }, 0)
        window.addEventListener('resize', function () {
          tl2.to(
            videoWrap,
            {
              position: 'static',
              top: 0,
              right: 0,
              width: '100%',
              xPercent: 0,
              rotate: 0,
              yPercent: 0,
              height: '99.5rem',
              'z-index': 1,
              duration: 0,
            },
            0
          )
        })
      }
    })
  }

  // if (document.getElementById('fullpage')) {
  //   if (window.matchMedia('(min-width:767.98px)').matches) {
  //     gsap.set('.fadeIn', { opacity: 0 })
  //     gsap.set('.fadeInLeft', { opacity: 0, xPercent: -100 })
  //     gsap.set('.fadeInDown', { opacity: 0, yPercent: -100 })
  //     gsap.set('.zoomIn', { opacity: 0, scale: 0 })
  //     ScrollTrigger.observe({
  //       type: 'wheel,touch,scroll,pointer',
  //       target: '.section.active',
  //       onChange: () => {
  //         if (document.querySelector('.main__section-first.active')) {
  //           swiperMainSection1.autoplay.start()
  //           gsap.to('.swiper_main-section-1', {
  //             opacity: 1,
  //             yPercent: 0,
  //             delay: 0.5,
  //           }),
  //             gsap.to('.title1_section-1', {
  //               opacity: 1,
  //               xPercent: 0,
  //               delay: 0.5,
  //             }),
  //             gsap.to('.title2_section-1', { opacity: 1, delay: 1.5 }),
  //             gsap.to('.title3_section-1', { opacity: 1, delay: 1.8 }),
  //             gsap.to('.btn_section-1', { opacity: 1, delay: 2 })
  //         }
  //         if (document.querySelector('.main__section-second.active')) {
  //           swiperMainSection2.autoplay.start()
  //           gsap.to('.main__section-second .content_left', {
  //             opacity: 1,
  //           }),
  //             gsap.to('.main__section-second .icon_wrap', {
  //               opacity: 1,
  //             })
  //           gsap.to('.main__section-content .title_mobile', {
  //             opacity: 1,
  //             yPercent: 0,
  //           }),
  //             gsap.to('.main__section-second .content_right .title', {
  //               opacity: 1,
  //               yPercent: 1,
  //             }),
  //             gsap.to('.main__section-second .swiper-slide .subtitle', {
  //               opacity: 1,
  //               delay: 1.3,
  //             }),
  //             gsap.to('.main__section-second .swiper-slide .text', {
  //               opacity: 1,
  //               delay: 1.5,
  //             })
  //           gsap.to('.main__section-second  .btn', {
  //             opacity: 1,
  //             delay: 1.8,
  //           })
  //         }
  //         if (document.querySelector('.main__section-third.active')) {
  //           swiperMainSection3.autoplay.start()
  //           gsap.to('.main__section-third .left_block .text', {
  //             opacity: 1,
  //             yPercent: 0,
  //           })
  //           gsap.to('.main__section-third .left_block .subtitle_span', {
  //             opacity: 1,
  //             delay: 1.3,
  //           })
  //           gsap.to('.main__section-third .left_block .subtitle', {
  //             opacity: 1,
  //             delay: 1.3,
  //           })
  //           gsap.to('.main__section-third .left_block .btn', {
  //             opacity: 1,
  //             delay: 1.5,
  //           })
  //           gsap.to('.main__section-third .right_block .img_block', {
  //             opacity: 1,
  //             scale: 1,
  //           })
  //           gsap.to('.main__section-third .swiper-pagination', {
  //             opacity: 1,
  //             delay: 1.5,
  //           })
  //         }
  //         if (document.querySelector('.main__section-fourth.active')) {
  //           swiperMainSection4.autoplay.start()
  //           gsap.to('.main__section-fourth .photo_after', {
  //             opacity: 1,
  //             xPercent: 0,
  //           })
  //           gsap.to('.main__section-fourth .photo_before', {
  //             opacity: 1,
  //           })
  //           gsap.to('.main__section-fourth .right_block .title', {
  //             opacity: 1,
  //             yPercent: 0,
  //           })
  //           gsap.to('.main__section-fourth .right_block .pots-value', {
  //             opacity: 1,
  //             delay: 1.3,
  //           })
  //           gsap.to('.main__section-fourth .right_block .text_block', {
  //             opacity: 1,
  //             delay: 1.5,
  //           })
  //         }
  //         if (document.querySelector('.main__section-fifth.active')) {
  //           gsap.to('.main__section-fifth .container', {
  //             opacity: 1,
  //             yPercent: 0,
  //           })
  //           gsap.to('.main__section-fifth .main__section-content', {
  //             opacity: 1,
  //             delay: 1.5,
  //           })
  //         }
  //         if (document.querySelector('.main__section-sixth.active')) {
  //           gsap.to('.main__section-sixth .circles_left', {
  //             opacity: 1,
  //           })
  //           gsap.to('.main__section-sixth .circles_center', {
  //             opacity: 1,
  //             scale: 1,
  //           })
  //           gsap.to('.main__section-sixth .circles_right', {
  //             opacity: 1,
  //           })
  //         }
  //       },
  //       preventDefault: true,
  //     })
  //   } else {
  //     animItems()
  //   }
  // }

  if (document.querySelector('.video__section')) {
    const videoWrap = document.querySelector('.video__section .section_video')
    const video = document.querySelector('.video__section video')
    const toggleBtn = document.querySelector('.rotate-icon')
    gsap.set(videoWrap, {
      position: 'relative',
      'z-index': 2,
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
      rotate: 0,
      xPercent: 0,
      yPercent: 0,
    })
    gsap.set(
      '.video__section .rotate-icon',
      {
        bottom: '3rem',
        right: '3rem',
      },
      0
    )
    if (isMobile.any()) {
      gsap.to('.video__section .rotate-icon', {
        display: 'block',
      })
      const tl1 = gsap.timeline()
      const tl2 = gsap.timeline()
      toggleBtn.addEventListener('click', function () {
        if (!videoWrap.classList.contains('_fs')) {
          tl2.kill()
          openfullscreen()
          videoWrap.classList.add('_fs')
          document.querySelector('body').style.overflow = 'hidden'
          tl1.to(
            videoWrap,
            {
              position: 'fixed',
              'z-index': 200,
              top: '50%',
              right: '50%',
              width: '100vh',
              height: '100vw',
              rotate: 90,
              xPercent: 50,
              yPercent: -50,
              duration: 0,
              delay: 0,
            },
            0
          )
          tl1.to(
            '.video__section .rotate-icon',
            {
              bottom: '6rem',
              right: '14rem',
              duration: 0,
              delay: 0,
            },
            0
          )
          gsapV(videoWrap)
          window.addEventListener('resize', function () {
            gsapV(videoWrap)
          })
        } else {
          tl2.kill()
          closefullscreen()
          videoWrap.classList.remove('_fs')
          document.querySelector('body').style.overflow = 'auto'
          tl1.to(
            videoWrap,
            {
              position: 'relative',
              'z-index': 2,
              top: 0,
              right: 0,
              width: '100%',
              height: '100%',
              rotate: 0,
              xPercent: 0,
              yPercent: 0,
              duration: 0,
              delay: 0,
            },
            0
          )
          tl1.to(
            '.video__section .rotate-icon',
            {
              bottom: '3rem',
              right: '3rem',
              duration: 0,
              delay: 0,
            },
            0
          )
          window.addEventListener('resize', function () {
            tl1.to(
              videoWrap,
              {
                position: 'relative',
                'z-index': 2,
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                rotate: 0,
                xPercent: 0,
                yPercent: 0,
                duration: 0,
                delay: 0,
              },
              0
            )
          })
        }
      })
    }

    initVideo(video, video)
  }
})
