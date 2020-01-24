function gamerestart() {
  window.location.reload(true)
}

function shuffle() {
  var carddeck = ['card1', 'card2', 'card3', 'card1', 'card2', 'card3']
  var j, x, i
  for (i = carddeck.length; i; i -= 1) {
    j = Math.floor(Math.random() * i)
    x = carddeck[i - 1]
    carddeck[i - 1] = carddeck[j]
    carddeck[j] = x
  }
  return carddeck
}

function cardset() {
  var mixup = shuffle()
  for (var i = 0; i < mixup.length; i++) {
    var createcard =
      "<img src='ura.png' class=" +
      mixup[i] +
      " width='100px' height='150px'>&nbsp"
    $('#cardground').append(createcard)
  }
}

cardset()

$(document).ready(function() {
  $(document).on('click', 'img', function() {
    var check = $(this).hasClass('back')
    var CSS = $(this).attr('class')

    if (!check && CSS != 'success') {
      $(this).attr('src', CSS + '.png')
      $(this).addClass('back')
    } else {
      console.log('back')
    }
    var BackLength = $('.back').length

    if (BackLength == 2) {
      var FirstB = $('.back')
        .eq(0)
        .attr('class')
      var SecondB = $('.back')
        .eq(1)
        .attr('class')
      if (FirstB != SecondB) {
        setTimeout(function() {
          $('.back').attr('src', 'ura.png')
          $('img').removeClass('back')
        }, 500)
      } else {
        $('.back').attr('class', 'success')
      }
      BackLength = 0
    }
  })
})
