# 最終課題(解説)

> 引用

- 効果音ラボ　https://soundeffect-lab.info/sound/anime/
- TECH.CMD08.COM https://tech.cmd08.com/javascript-janken
- PonkSoft https://ponk.jp/jquery/basic/jigsaw

## 概要

私は、ジグソーパズルまたはじゃんけんゲームに飛ぶための HP と、ジグソーパズル・じゃんけんゲームのページをそれぞれ作成しました。

### ホームページの作成

1. `<h1>何をする？</h1>`という文字を final.js で`$('h1').fadeOut(3000).css({ color:"blue" });`と３秒後に表示されなくなるようにした。
2. `<a href="final1.html">ジグソーパズルへ！</a>`
   `<a href="final2.html">じゃんけんゲームへ！</a>`でクリックしたらそれぞれのゲーム画面にいくようにした。
3. HTML 上に以下のようなコードを書き込むことで背景をオシャレにした。

- html

```
<script src="https://cdn.jsdelivr.net/npm/bubbly-bg@1.0.0/dist/bubbly-bg.js"></script>
<script>
  bubbly()
</script>
```

- js

```
bubbly()
```

### ジグソーパズルゲームページの作成

1. jQuery を使用した。
2. 画面の場所指定をした。

```
<style>
.piece {
  width: 80px;
  height: 80px;
  background-image: url('https://i.pinimg.com/474x/00/07/a1/0007a1e95d792f0cca2edc2f2913c4c9.jpg');
  position: absolute;
}
</style>
```

3. - `var sel = -1`で現在選択されている番号の初期値を設定。
   - `var pos = []`で角ピースの現在位置の初期値を設定。
4. 画像のピースの初期位置をランダムにシャッフルするコードを描画。

```
for (var i = 0; i < 16; i++) pos[i] = i
for (var i = 16; i > 0; i--) {
  var j = Math.floor(Math.random() * i)
  swap(i - 1, j)
}
```

5. ピースを配置するコードを描画

```

  for (var i = 0; i < 16; i++) {
    $('<div id="piece' + i + '" class="piece"></div>')
      .css({
        backgroundPosition: '-' + getx(i) + 'px -' + gety(i) + 'px',
        left: getx(pos[i]),
        top: gety(pos[i]),
      })
      .appendTo($('body'))
  }
```

6. ピースがクリックされた時`$('.piece').click(function() { var no = this.id.substring(5)`

- クリックされたピースをもう一度選択された場合

```
if (sel == no){$(this).fadeTo(100, 1)
  sel = -1}
```

- 何も選択されていない場合は選択する

```

else if (sel == -1) {
\$(this).fadeTo(100, 0.5)
sel = no
}

```

- 他のピースが選択されている場合は入れ替える

```

else {
swap(no, sel)
$('#piece' + sel)
     .fadeTo(100, 1)
     .animate({ left: getx(pos[sel]), top: gety(pos[sel]) })
   $(this).animate({ left: getx(pos[no]), top: gety(pos[no]) }

```

7. 画像が完成したらクリア判定する

```

function() {
var clear = true
for (var i = 0; i < 16; i++) if (pos[i] != i) clear = false
if (clear) {
var audio = new Audio()
audio.src = 'correct4.mp3'
audio.play()
alert('Clear！')
}
}

```

8. ピースの番号から座標を得る

```
function getx(n) {
return (n % 4) _ 80
}
function gety(n) {
return Math.floor(n / 4) _ 80
}
```

9. ピースの配置を入れ替える

```

function swap(i, j) {
var tmp = pos[i]
pos[i] = pos[j]
pos[j] = tmp
}

```

### じゃんけんゲームページの作成

1. HTML の方で"グー","チョキ","パー"の三種類のボタンを作成

2. じゃんけんの勝敗判定の仕組み

- html のじゃんけんの手の並びが重要で、[1.グー、2.チョキ、3.パー]と必ず隣接している者同士の左(数字の小さい方)がじゃんけんで勝強うに並んでいる。ただ、"パー、グー"の場合は数字が大きい方が勝つことになる。そのため、引き算で出た値に 3 を足して、そのままだと値が大きくなりすぎる場合があるため、3 で割って調整した。
  例:グー vs グー：(1-1+3)%3=1...0→"あいこ"
  　 グー vs パー：(1-3+3)%3=0...1→"負け"
  　 グー vs チョキ：(1-2+3)%3=0...2→"勝ち"

```
judge = (playerChoice - enemyChoice + 3) % 3;
```

## 採点要件

- [x] Javascript をつかった web ページを作成する
- [x] 条件分岐を使う
- [x] 繰り返しを使う

また、以下から 2 つ以上実装してください。

- [x] 配列または連想配列を使う
- [ ] センサー情報を使う
- [ ] マッシュアップを使う
- [x] ライブラリを使う
