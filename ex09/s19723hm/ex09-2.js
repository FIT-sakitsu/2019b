function light_print(event) {
  var elm = document.getElementById('lighttext')
  elm.value = event.value
}

window.addEventListener('devicelight', light_print)
