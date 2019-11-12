var pAll = document.getElementsByTagName('p')

function countP() {
  document.getElementsByTagName('input')[1].setAttribute('value', pAll.length)
}
