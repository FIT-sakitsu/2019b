var timer = null

function start() {
  startTimer()
}

function stop() {
  stopTimer()
}

function interval_callback() {
  alert('timeout!')
}
function startTimer() {
  if (timer == null) timer = setInterval(interval_callback, 1000)
}

function stopTimer() {
  if (timer != null) clearInterval(timer)
  timer = null
}
