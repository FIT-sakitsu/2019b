function searchClass() {
  var weekday = Number(prompt('何曜日？（月=1、火＝2、水＝3、木＝4、金＝5）'))
  var period = Number(prompt('何限？'))

  alert(document.getElementsByTagName('tr')[period].children[weekday].innerHTML)
}

function searchClass() {
  var weekday_a = prompt('何曜日？（曜日は付けずに）')
  var period = Number(prompt('何限？'))

  switch (weekday_a[0]) {
    case '月':
      var weekday_b = 1
      break
    case '火':
      var weekday_b = 2
      break
    case '水':
      var weekday_b = 3
      break
    case '木':
      var weekday_b = 4
      break
    case '金':
      var weekday_b = 5
      break
    default:
  }
  alert(
    document.getElementsByTagName('tr')[period].children[weekday_b].innerHTML
  )
}
