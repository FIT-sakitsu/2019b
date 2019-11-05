function change() {
  var word = document.getElementById('word')
  switch (word.style.textDecoration) {
    case '':
      word.style.textDecoration = 'line-through'
      break
    case 'line-through':
      word.style.textDecoration = ''
      break
    default:
  }
}
