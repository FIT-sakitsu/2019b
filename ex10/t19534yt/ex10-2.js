$(function() {
  $('#changeccc').click(function() {
    reset()
    changeccc()
  })
})

$(function() {
  $('#changeaaabbb').click(function() {
    reset()
    changeaaabbb()
  })
})

function changeccc() {
  var color = $('#color').val()
  $('.ccc').css('background-color', color)
}

function changeaaabbb() {
  var color = $('#color').val()
  $('.aaa+.bbb').css('background-color', color)
}

function reset() {
  $('div p').css('background-color', 'transparent')
}

// $(function() {
//   $('#click').click(function() {
//     if ($('#click').css('text-decoration') == 'none') {
//       $('#click').css('text-decoration', 'line-through')
//     } else {
//       $('#click').css('text-decoration', 'none')
//     }
//   })
