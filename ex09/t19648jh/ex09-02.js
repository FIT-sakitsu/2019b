function showLightIntencity(event) {
  var output = document.getElementById('lightoutput')
  output.value = event.value
}

window.addEventListener('devicelight', showLightIntencity)
