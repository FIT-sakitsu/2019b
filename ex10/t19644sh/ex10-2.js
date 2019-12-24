$(function() {
  $('#ccc').click(function() {
    $('.ccc').css('background-color', $('#text').val())
  })
})

$(function() {
  $('#aaabbb').click(function() {
    $('.aaa+.bbb').css('background-color', $('#text').val())
  })
})

$(function() {
  $('#reset').click(function() {
    $('.aaa,.bbb,.ccc').css('background-color', 'transparent')
  })
})
