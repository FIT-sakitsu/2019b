$(function() {
  $('#btn1').click(function() {
    var color = $('#inp').val()
    $('p.ccc').css('background-color', color)
  })
  $('#btn2').click(function() {
    var color = $('#inp').val()
    $('p.aaa+p.bbb').css('background-color', color)
  })
})
