var check = [
  ['アイスクリームには賞味期限がある', 2],
  ['パンダの尻尾は白である。 ', 1],
  ['現在、2000円札は製造を停止している。', 1],
  ['塩をかけたナメクジはすでに死んでいる。', 2],
  ['アメリカの首都はNYである。 ', 2],
  ['一般的に体の水分は、男性より女性のほうが多く含まれている。', 2],
  ['ヤドカリとタラバガニは仲間である。', 1],
  ['1円玉の直径は、ちょうど１ｃｍになっている。', 2],
  ['ホワイトハウスには映画を観られる施設がある ', 1],
  ['オカメインコはインコの仲間である', 2]
];

var count = 0;
var correctNum = 0;

window.onload = function() {

  var question = document.getElementById('question');
  question.innerHTML = (count + 1) + '問目：' + check[count][0];
};


function kaiseki(Nobutton) {
  if (check[count][1] == Nobutton) {
    correctNum++;
  }

  if (count == 9) {
    alert('正答数は' + correctNum + '問！');
  }

  count++;

  var question = document.getElementById('question');
  question.innerHTML = (count + 1) + '問目：' + check[count][0];
}
