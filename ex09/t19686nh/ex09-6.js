function plus() {
  var string = document.getElementById('letter').value

  var ptag = document.getElementById('P').innerText

  var newmoji = string.slice(0, ptag.length + 1)
  document.getElementById('P').innerText = newmoji
}

function second() {
  setInterval(plus, 1000)
}
// charAt(0)
