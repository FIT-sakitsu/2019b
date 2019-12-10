function showLightIntencity(event) {
  var light = document.getElementById('light')
  light.value = event.value
}

window.addEventListener('devicelight', showLightIntencity)
