/*function line() {
  var element = document.getElementById("sent");

  if(element.style.textDecoration == "") {
    element.style.textDecoraation = "line-through";
  }
  else {
    element.style.textDecoration = "";
  }
}*/

$(function() {
  $('p').click(function() {
    if ($('p').css('text-decoration') == 'none') {
      $('p').css('text-decoration', 'line-through')
    } else {
      $('p').css('text-decoration', 'none')
    }
  })
})
