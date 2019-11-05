function change() {
  var table = document.getElementById('table')
  var currentClassName = table.className
  switch (currentClassName) {
    case 'table table-striped':
      currentClassName = 'table table-striped table-dark'
      break
    case 'table table-striped table-dark':
      currentClassName = 'table table-striped'
      break
  }
  table.className = currentClassName
}
