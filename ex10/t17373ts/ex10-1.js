$(function() {
  $('#sentence').click(function() {
    var currentStyle = $('#sentence').css('text-decoration')
    if (currentStyle == 'line-through') {
      $('#sentence').css('text-decoration', 'none')
    } else {
      $('#sentence').css('text-decoration', 'line-through')
    }
  })
})
