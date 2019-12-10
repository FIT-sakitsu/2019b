var timer = null

function timeAlert() {
  alert('timeout!')
}

function setTimer() {
  if (timer == null) {
    timer = setInterval(timeAlert, 5000)
  }
}

function stopTimer() {
  if (timer != null) {
    clearInterval(timer)
  }
  timer = null
}
