// Dom elements, global constants
const backward = document.querySelector('.backward')
const currentTime = document.querySelector('.current-time')
const durationVideo = document.querySelector('.duration-video')
const forward = document.querySelector('.forward')
const informationContainer = document.querySelector('.information-container')
const pause = document.querySelector('.pause')
const play = document.querySelector('.play')
const progress = document.querySelector('.video-progress')
const progressBar = document.querySelector('.video-progress-filled')
const reduce = document.querySelector('.reduce')
const silence = document.querySelector('.silence')
const volume = document.querySelector('.volume')
const volumeProgress = document.querySelector('.volume-progress')
const volumeProgressBar = document.querySelector('.volume-progress-filled')
const playerHover = document.querySelector('.player-overlay')
const video = document.querySelector('[data-video]')
const expand = document.querySelector('.expand')

/**
// global functions
*/
function pauseVideo() {
  video.pause()
  pause.hidden = true
  play.hidden = false
}

function playVideo() {
  video.play()
  play.hidden = true
  pause.hidden = false
}

function expandVideo() {
  video.style.width = '100vw'
  video.style.height = '100vh'
  video.style.top = '-10.4rem'
  video.style.zIndex = 200
  if (document.body.webkitRequestFullscreen) {
    // chrome and safari
    document.body.webkitRequestFullscreen()
    expand.hidden = true
    reduce.hidden = false
  } else {
    // firefox
    document.body.requestFullscreen()
    expand.hidden = true
    reduce.hidden = false
  }
}

function reduceVideo() {
  video.style.width = '100%'
  video.style.height = '100%'
  video.style.top = 0
  video.style.zIndex = 10
  if (document.body.webkitRequestFullscreen) {
    // chrome and safari
    document.webkitExitFullscreen()
    expand.hidden = false
    reduce.hidden = true
  } else {
    // firefox
    document.mozCancelFullScreen()
    expand.hidden = false
    reduce.hidden = true
  }
}

/**
//
*/

// play functionality
// play.addEventListener('click', playVideo)

// pause functionality
// pause.addEventListener('click', pauseVideo)

/**
// expand / reduce fullscreen
*/

// expand functionality
expand.addEventListener('click', expandVideo)

// reduce functionality
reduce.addEventListener('click', reduceVideo)

// chrome & safari
document.addEventListener('webkitfullscreenchange', () => {
  if (!document.webkitIsFullScreen) {
    expand.hidden = false
    reduce.hidden = true
  }
})

// firefox
document.addEventListener('fullscreenchange', () => {
  if (!document.mozFullScreen) {
    expand.hidden = false
    reduce.hidden = true
  }
})

/**
//
*/
