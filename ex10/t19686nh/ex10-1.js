$(function() {
  $('p').click(function() {
    var current = $('p').css('text-decoration')
    if (current == 'line-through') {
      $('P').css('textDecoration', 'none')
    } else {
      $('P').css('textDecoration', 'line-through')
    }
  })
})
