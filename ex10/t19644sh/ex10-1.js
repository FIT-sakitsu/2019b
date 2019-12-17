$(function() {
  $('p').click(function() {
    var currentStyle = $('p').css('text-decoration')

    if (currentStyle == 'none') {
      $('p').css('text-decoration', 'line-through')
    } else {
      $('p').css('text-decoration', 'none')
    }
  })
})
