$(function() {
  $('#ccc').click(changeCCC)
  $('#aaabbb').click(changeAAABBB)
  // $('p').click(function() {
  //
  // function changeCCC() {
  // $("p").css("color", "red");
  // }
})

function changeCCC() {
  $('p').css('background-color', 'transparent')

  var color = $('#color').val()
  $('.ccc').css('background-color', color)
  // var elements = document.getElementsByClassName('ccc')
  // for (var i = 0; i < elements.length; i++) {
  // elements[i].style.backgroundColor = color
  // }
}

function changeAAABBB() {
  $('p').css('background-color', 'transparent')

  var color = $('#color').val()
  $('.aaa.bbb').css('background-color', color)
  // function changeAAABBB() {
  // var color = document.getElementById('color').value
  //
  // var elements = document.getElementsByClassName('aaa bbb')
  // for (var i = 0; i < elements.length; i++) {
  // elements[i].style.backgroundColor = color
  // }
}
