function changeCSS() {
  var table = document.getElementById('table')
  var currentClassName = table.currentClassName
  switch (currentClassName) {
    case 'table':
      currentClassName = 'table table-dark'
      break
    case 'table-dark':
      currentClassName = 'table'
      break
  }
  table.className = currentClassName
}
