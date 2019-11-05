function line() {
  var target = document.getElementById('target')
  if (target.style.textDecoration == 'line-through') {
    // 線が引かれている状態ならば線を消す
    target.style.textDecoration = ''
  } else {
    target.style.textDecoration = 'line-through'
  }
}
