var timer

function start() {
  timer = setInterval(timerCallback, 10000)
}

function stop() {
  clearInterval(timer)
  alert('停止しました。')
}

function timerCallback() {
  alert('timeout!')
}
