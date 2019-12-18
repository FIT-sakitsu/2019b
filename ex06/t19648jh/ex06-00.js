function changestyle() {
  var table = document.getElementById('table')
  var currentClassName = table.className
  switch (currentClassName) {
    case 'table':
      currentClassName = 'table table-striped table-dark'
      break
    case 'table table-striped table-dark':
      currentClassName = 'table'
      break
  }
  table.className = currentClassName
}
