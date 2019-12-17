/*function changeC() {
  $('p').css('background', '')

  $('.ccc').css('background', $('#cl').val())
}

function changeAB() {
  $('p').css('background', '')

  $('.aaa' + '.bbb').css('background', $('#cl').val())
}*/

$(function() {
  $('#c').click(function() {
    $('p').css('background', '')

    $('.ccc').css('background', $('#cl').val())
  })

  $('#ab').click(function() {
    $('p').css('background', '')

    $('.aaa' + '.bbb').css('background', $('#cl').val())
  })
})
