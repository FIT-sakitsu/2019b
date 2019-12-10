function timerCallback() {
  alert('timeout!')
}

function time() {
  setTimeout(timerCallback, 10000)
}
