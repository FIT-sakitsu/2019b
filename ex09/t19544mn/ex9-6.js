var timer = null

function readWords() {
  var string = document.getElementById('words').value
  var p = document.getElementById('p').innerHTML
  var nWord = string.charAt(p.length)
  p = p + nWord
  document.getElementById('p').innerHTML = p

  if (string.length == p.length) {
    clearInterval(timer)
    timer = null
  }
}

function startTimer() {
  timer = setInterval(readWords, 1000)
}
