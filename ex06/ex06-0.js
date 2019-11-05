function changeCSS() {
  // ボタンをクリックしたらテーブルのデザインを変える
  var table = document.getElementById('table')
  var currentClassName = table.className
  switch (currentClassName) {
    case 'table':
      currentClassName = 'table table-striped'
      break
    case 'table table-striped':
      currentClassName = 'table'
      break
  }
  table.className = currentClassName
}
