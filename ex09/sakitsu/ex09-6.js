var timer
var index

function execute() {
  timer = setInterval(typeWord, 1000)
  index = 0
}

function typeWord() {
  var input = document.getElementById('input').value
  var ouput = document.getElementById('output')
  if (input.length < index) {
    clearInterval(timer)
  } else {
    output.innerHTML = ouput.innerHTML + input.charAt(index++)
  }
}
