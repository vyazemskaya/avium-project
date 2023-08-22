$(document).ready(function () {
  $('#fullpage').fullpage({
    bigSectionsDestination: 'bottom',
    scrollBar: false,
    fitToSection: false,
  })
})

const mmd = window.matchMedia('(min-width: 768px)').matches
const md = window.matchMedia('(max-width: 768px)').matches

if (document.querySelector('.section_animate')) {
  // document.querySelector('body').style.overflow = 'hidden'
}
document.addEventListener('DOMContentLoaded', function (event) {
  window.onload = function () {
    window.requestAnimationFrame(function () {
      gsap.defaults({
        duration: 1,
      })

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
})

// ====
const animItems = document.querySelectorAll('[data-animate]')
animItems.forEach(item => {
  item.classList.add('wow')
})
const items = document.querySelectorAll('.wow')
items.forEach(item => {
  item.classList.remove('wow')
})
