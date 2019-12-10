function timeout_callback() {
  alert('timeout!')
}

var timer = null

function startTimer() {
  if (timer == null) timer = setInterval(timeout_callback, 10000)
}

function stopTimer() {
  if (timer != null) clearInterval(timer)
  timer = null
}
