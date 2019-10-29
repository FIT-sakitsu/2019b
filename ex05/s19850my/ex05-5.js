function reset() {
  var resets = document.getElementById('reset')

  for (var i = 0; i < elements.length; i++) {
    resets[i].innerHTML = '要素' + (i + 1)
  }

  function ccc() {
    var ccctext = document.getElementById('text').value
    var elements = document.getElementsByClassName('ccc')
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = ccctext
    }

    function aaabbb() {
      var abtext = document.getElementById('text').value
      var elements = document.getElementsByClassName('ab')
      for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = abtext
      }
    }
  }
}
