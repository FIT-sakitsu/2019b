function ex0502() {
  var characters = []

  for (var i = 1; i <= 5; i++) {
    var character = prompt('文字を入力してください')
    characters.push(character)
  }

  var characters = [
    characters[0],
    characters[1],
    characters[2],
    characters[3],
    characters[4],
  ]

  characters.sort()
  alert(characters)
}
