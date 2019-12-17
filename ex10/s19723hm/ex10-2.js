$(function() {
  $('#button1').click(function() {
    $('.ccc').css({
      backgroundColor: $('#input').val(),
    })
  })

  $('#button2').click(function() {
    $('.aaa.bbb').css({
      backgroundColor: $('#input').val(),
    })
  })
})
