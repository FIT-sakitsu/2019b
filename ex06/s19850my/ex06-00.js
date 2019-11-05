function changeCSS() {
  var table = document.getElementById('table')
  switch (table.className) {
    case 'table':
      table.className = 'table table-dark'
      break
    case 'table table-dark':
      table.className = 'table'
      break
  }
}
