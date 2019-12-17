$(function() {
  $('#ccc').click(changeCCC)
  $('#aaabbb').click(changeAAABBB)

  function changeCCC() {
    var color = $('#color').val()
    //
    // var elements = document.getElementsByClassName('ccc')
    // for (var i = 0; i < elements.length; i++) {
    //   elements[i].style.backgroundColor = color
    // }
    $('.ccc').css('background-color', color)
  }

  function changeAAABBB() {
    var color = $('#color').val()
    $('.aaabbb').css('background-color', color)
  }
})
