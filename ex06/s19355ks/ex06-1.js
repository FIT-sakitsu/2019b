function change() {
  var element = document.getElementById('target')
  switch (element.style.textDecoration) {
    case '':
      element.style.textDecoration = 'line-through'
      break
    case 'line-through':
      element.style.textDecoration = ''
      break
    default:
  }
}
