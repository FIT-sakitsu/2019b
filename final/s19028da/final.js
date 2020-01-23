la = [
  'あ',
  'か',
  'さ',
  'た',
  'な',
  'は',
  'ま',
  'や',
  'ら',
  'わ',
  'が',
  'ざ',
  'だ',
  'ば',
  'ぱ',
]
li = [
  'い',
  'き',
  'し',
  'ち',
  'に',
  'ひ',
  'み',
  'り',
  'ぎ',
  'じ',
  'ぢ',
  'び',
  'ぴ',
]
lu = [
  'う',
  'く',
  'す',
  'つ',
  'ぬ',
  'ふ',
  'む',
  'ゆ',
  'る',
  'ぐ',
  'ず',
  'づ',
  'ぶ',
  'ぷ',
]
le = [
  'え',
  'け',
  'せ',
  'て',
  'ね',
  'へ',
  'め',
  'れ',
  'げ',
  'ぜ',
  'で',
  'べ',
  'ぺ',
]
lo = [
  'お',
  'こ',
  'そ',
  'と',
  'の',
  'ほ',
  'も',
  'よ',
  'ろ',
  'を',
  'ご',
  'ぞ',
  'ど',
  'ぼ',
  ,
  'ぴ',
]
var family = [0, 0, 0]

//関数
function rap() {
  //入力された関数を配列にしてinputに入れる。
  var input = document.getElementById('text').value
  input = input.split('')

  //--------------------------入力値の韻を調べる--------------------------
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < la.length; j++) {
      if (input[i] == la[j]) {
        family[i] = la
      }
    }
  }
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < li.length; j++) {
      if (input[i] == li[j]) {
        family[i] = li
      }
    }
  }
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < lu.length; j++) {
      if (input[i] == lu[j]) {
        family[i] = lu
      }
    }
  }
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < le.length; j++) {
      if (input[i] == le[j]) {
        family[i] = le
      }
    }
  }
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < lo.length; j++) {
      if (input[i] == lo[j]) {
        family[i] = lo
      }
    }
  }

  //-------------------wp1~3に入力値の1~3文字目を入力する-------------------

  w1 = input[0]
  w2 = input[1]
  w3 = input[2]

  //-------------------韻を踏んだやつを全パターン生成する-------------------

  var content = document.getElementById('c').textContent

  for (var i = 0; i < family[0].length; i++) {
    w1 = family[0][i]
    for (var j = 0; j < family[2].length; j++) {
      w3 = family[2][j]
      content = content + document.write(`${w1 + w2 + w3} <br>`)
    }
  }
}
