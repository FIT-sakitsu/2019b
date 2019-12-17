$(function() {
  $('p').click(function() {
    var currentStyle = $('p').css('text-decoration')
    if (currentStyle != 'line-through') {
      $('p').css('text-decoration', 'line-through')
    }
    if (currentStyle == 'line-through') {
      $('p').css('text-decoration', '')
    }
  })
})
