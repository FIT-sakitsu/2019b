var timer

function start() {
  timer = setInterval(timerCallback, 1000)
}

function stop() {
  clearInterval(timer)
}

function timerCallback() {
  alert('Time has come!')
}
