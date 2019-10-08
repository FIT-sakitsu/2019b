function searchClass() {
  var weekday = Number(prompt('何曜日？（月=1、火＝2、水＝3、木＝4、金＝5）'))
  var period = Number(prompt('何限？'))

  alert(document.getElementsByTagName('tr')[period].children[weekday].innerHTML)
}
