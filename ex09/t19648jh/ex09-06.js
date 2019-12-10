var timer
var index

function moji() {
  timer = setInterval(word, 1000)
  index = 0
}

function word() {
  var input = document.getElementById('input').value
  var ouput = document.getElementById('output')
  if (input.length < index) {
    clearInterval(timer)
  } else {
    output.innerHTML = ouput.innerHTML + input.charAt(index++)
  }
}
