$(function() {
  $('#click').click(function() {
    if ($('#click').css('text-decoration') == 'none') {
      $('#click').css('text-decoration', 'line-through')
    } else {
      $('#click').css('text-decoration', 'none')
    }
  })

  // .css(
  // text-decoration:line-through;
  // if (click.style.textDecoration == 'line-through') {
  //   click.style.textDecoration = ''
  // } else {
  //   click.style.textDecoration = 'line-through'
  // });
})
