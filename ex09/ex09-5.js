var timer

function start() {
  timer = setInterval(timerCallback, 10000)
}

function stop() {
  clearInterval(timer)
}

function timerCallback() {
  alert('timeout!')
}
