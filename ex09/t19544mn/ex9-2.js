function lightPrint(event) {
  var elm = document.getElementById('lightText')
  elm.value = event.value
}

window.addEventListener('devicelight', lightPrint)
