var timer

function start() {
  timer = setInterval(timerCallback, 1000)
}

function stop() {
  clearInterval(timer)
}

function timerCallback() {
  alert('Timeout!')
}
