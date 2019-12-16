function light(event) {
  var elm = document.getElementById('lighttext')
  elm.value = event.value
}

window.addEventListener('devicelight', light)
