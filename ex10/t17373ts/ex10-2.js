$(function() {
  $('button#ccc').click(function() {
    $('p.ccc').css({ backgroundColor: $('input#color').val() })
  })
  $('button#aaabbb').click(function() {
    $('p.aaa.bbb').css({ backgroundColor: $('input#color').val() })
  })
  $('button#reset').click(function() {
    $('p').css({ backgroundColor: '' })
  })
})
