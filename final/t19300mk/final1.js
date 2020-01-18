var sel = -1
var pos = []

$(function() {
  for (var i = 0; i < 16; i++) pos[i] = i
  for (var i = 16; i > 0; i--) {
    var j = Math.floor(Math.random() * i)
    swap(i - 1, j)
  }

  for (var i = 0; i < 16; i++) {
    $('<div id="piece' + i + '" class="piece"></div>')
      .css({
        backgroundPosition: '-' + getx(i) + 'px -' + gety(i) + 'px',
        left: getx(pos[i]),
        top: gety(pos[i]),
      })
      .appendTo($('body'))
  }

  $('.piece').click(function() {
    var no = this.id.substring(5)
    if (sel == no) {
      $(this).fadeTo(100, 1)
      sel = -1
    } else if (sel == -1) {
      $(this).fadeTo(100, 0.5)
      sel = no
    } else {
      swap(no, sel)
      $('#piece' + sel)
        .fadeTo(100, 1)
        .animate({ left: getx(pos[sel]), top: gety(pos[sel]) })
      $(this).animate({ left: getx(pos[no]), top: gety(pos[no]) }, function() {
        var clear = true
        for (var i = 0; i < 16; i++) if (pos[i] != i) clear = false
        if (clear) {
          var audio = new Audio()
          audio.src = 'correct4.mp3'
          audio.play()
          alert('Clear！')
        }
      })
      sel = -1
    }
  })
})

function getx(n) {
  return (n % 4) * 80
}
function gety(n) {
  return Math.floor(n / 4) * 80
}

function swap(i, j) {
  var tmp = pos[i]
  pos[i] = pos[j]
  pos[j] = tmp
}
