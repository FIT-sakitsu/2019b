var timer

function timer() {
  setInterval(timerCallback, 1000)
}

function timerstop() {
  clearInterval(timer)
}
function timerCallback() {
  alert('timeout!')
}
