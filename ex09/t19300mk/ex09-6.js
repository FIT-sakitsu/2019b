var timer
var index

function exe() {
  timer = setInterval(typeWord, 1000)
  index = 0
}

function typeWord() {
  var input = document.getElementById('input').value
  var ouput = document.getElementById('output')
  if ((index++, input.length < index)) {
    clearInterval(timer)
  } else {
    output.innerHTML = ouput.innerHTML + input.charAt(index - 1)
  }
}
