export const isFullScreen = function () {
  return !! (
    document.fullscreen ||
    document.mozFullScreen ||                        
    document.webkitIsFullScreen ||
    document.webkitFullScreen ||
    document.msFullScreen
  )
}

const fullScreen = {
  open () {
    if (!isFullScreen()) {
      let el = document.documentElement
      let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
      console.log(el, rfs)
      if (typeof rfs != 'undefined' && rfs) {
        rfs.call(el)
      } else if (typeof window.ActiveXObject !== 'undefined') { // for Internet Explorer
        var wscript = new ActiveXObject('WScript.Shell')
        if (wscript !== null) {
          wscript.SendKeys('{F11}')
        }
      }
    }
  },
  close () {
    if (isFullScreen()) {
      const exitMethod = document.exitFullscreen || // W3C
        document.mozCancelFullScreen || // FireFox
        document.webkitExitFullscreen || // Chrome等
        document.webkitExitFullscreen; // IE11
      if (typeof exitMethod != 'undefined' && exitMethod) {
        exitMethod.call(document)
      } else if (typeof window.ActiveXObject !== 'undefined') { // for Internet Explorer
        var wscript = new ActiveXObject('WScript.Shell')
        if (wscript !== null) {
          wscript.SendKeys('{F11}')
        }
      }
    }
  }
}

export default fullScreen
