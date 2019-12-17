$(function() {
  $('p').click(function() {
    var currentStyle = $('p').css('text-decoration')
    if (currentStyle.split(' ').includes('line-through')) {
      $('p').css('text-decoration', 'none')
    } else {
      $('p').css('text-decoration', 'line-through')
    }
  })
})
