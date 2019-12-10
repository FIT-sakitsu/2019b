function showLightIntencity(event) {
  var output = document.getElementById('output')
  output.value = event.value
}

window.addEventListener('devicelight', showLightIntencity)
