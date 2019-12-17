$(function() {
  $('p').click(whenPTagClicked)
})

function whenPTagClicked() {
  var line = $('p').css('text-decoration')
  if (line == 'line-through') {
    $('p').css('text-decoration', 'none')
  } else {
    $('p').css('text-decoration', 'line-through')
  }
}
