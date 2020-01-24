function showLightIntencity(event) {
  var output = document.getElementById('hikari')
  output.value = event.value
}

window.addEventListener('devicelight', showLightIntencity)

function atai() {
  if (popo < 5000) {
    alert('勝った')
  } else if (popo == 5000) {
    alert('引き分け')
  } else {
    alert('負けた')
  }
}
