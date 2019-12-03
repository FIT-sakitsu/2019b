function Changedesign() {
  var table = document.getElementById('table')
  var currentClassName = table.className
  switch (currentClassName) {
    case 'table table-striped':
      currentClassName = 'table table-dark'
      break
    case 'table table-dark':
      currentClassName = 'table table-striped'
      break
  }
  table.className = currentClassName
}
