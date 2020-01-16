var Reversi = function() {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d') //canvas作製

  var column = 8 //盤面横マス数
  var row = 8 //盤面縦マス数
  var cellWidth = 500 / column
  var stoneRadius = (cellWidth * 0.8) / 2 //コマの直径

  var board = []

  var render = function() {
    //render 描画する関数
    ctx.fillStyle = '#080'
    ctx.fillRect(0, 0, cellWidth * row, cellWidth * column)
    for (i = 0; i < column + 1; i++) {
      var y = i * cellWidth
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(cellWidth * row, y)
      ctx.closePath()
      ctx.strokeStyle = '#000'
      ctx.stroke()
    }
    for (i = 0; i < row + 1; i++) {
      var x = i * cellWidth
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, cellWidth * column)
      ctx.closePath()
      ctx.strokeStyle = '#000'
      ctx.stroke()
    }

    for (i = 0; i < column; i++) {
      var y = i * cellWidth
      for (j = 0; j < row; j++) {
        var x = j * cellWidth
        //
        /*if ((i + j) % 2 === 0) {
          //チェッカーボード
          ctx.fillStyle = '#000'
          ctx.fillRect(x, y, cellWidth, cellWidth)
        }*/
        //オセロ本体
        var idx = twoDToOneD(j, i)
        var stoneColor = board[idx]
        if (stoneColor !== 2) {
          ctx.beginPath()
          ctx.arc(x + cellWidth / 2, y + cellWidth / 2, stoneRadius, 0, 6.28)
          ctx.closePath()
          ctx.strokeStyle = '#fff'
          if (stoneColor === 0) {
            console.log(1)
            ctx.fillStyle = '#000'
          } else {
            ctx.fillStyle = '#fff'
          }
          ctx.stroke()
          ctx.fill()
        }
      }
    }

    var init = function() {
      //ゲームが終わった時・ゲームを最初に描画する時に最初の盤面を描画するfunction
      for (var i = 0; i < column * row; i++) {
        /*
      0 is black
      1 is white
      2 is empty
      */
        board[i] = 2 //2 is empty
      }
      //fill the center 4
      board[27] = 0
      board[28] = 1
      board[35] = 1
      board[36] = 0
    }
    init()
    render()

    this.init = init
    this.render = render

    color = 0
    antiColor = 1

    var twoDToOneD = function(x, y) {
      //座標（x,y）→ twoDToOneDマス目に変換
      return y * row + x
    }
    var oneDToTwoD = function(idx) {
      //idxマス目 → 座標（oneDToTwoD）に変換
      return [idx % row, Math.floor(idx / row)]
    }

    var xyInRange = function(x, y) {
      //ルーチン関数
      if (x < 0 || x >= row) {
        return false
      } //左端と右端で次配列に行かないように処理停止
      if (y < 0 || y >= column) {
        return false
      } //上端と下端で次配列に行かないように処理停止
      if (maskX[i] < 0 || maskX[i] >= row) {
        return false
      }
      if (maskY[i] < 0 || maskY[i] >= column) {
        return false
      } else {
        return true
      }
      var coordsToIdx = function(x, y) {
        //枠内の座標でクリックしたら枠左上の点を選んたことにする
        var j = Math.floor(x / cellWidth)
        var i = Math.floor(y / cellWidth)
        return twoDToOneD(j, i) //
      }
    }

    var maskX = [-1, 0, 1, -1, 1, -1, 0, 1]
    var maskY = [-1, -1, -1, 0, 0, 1, 1, 1]
  }

  var canvasOnclick = function(e) {
    //クリックすることで座標の情報を獲得
    var x = e.offsetX
    var y = e.offsetY
    var idx = coordsToIdx(x, y)
    if (board[idx] === 2) {
      var flipped = findFlipped(idx)
      if (flipped.length === 0) {
        alert('その場所には置けません！')
        return false
      }
    } else {
      for (var i = 0; i < mask.length; i++) {
        // mask[];
      }
    }
  }

  canvas.addEventListener('click', function() {})
}

var reversi = new Reversi()

/*以下junk


this.init = init
// Reversi.init  = init;

this.place = function(x, y) {}

this.color = 0
canvas.onclick = function() {
  if (this.color === 0) {
    this.color = 1
  } else {
    this.color = 0
  }
  //canvas内をクリックした時白黒を入れ替える
}
this.placeNew = function() {
  var color = this.color
  for (var i = 0; i < 3; i++) {}
}

this.seeAround = function(x, y, color) {
  //color が0か1
  //see inside the board
  var adjcells = [
    board[(y - 1) * boardWidth + (x - 1)],
    board[(y - 1) * boardWidth + (x + 0)],
    board[(y - 1) * boardWidth + (x + 1)], //上3マス

    board[(y + 0) * boardWidth + (x - 1)],
    //board[(y + 0) * boardWidth + (x + 0)] 真ん中
    board[(y + 0) * boardWidth + (x + 1)], //中2マス

    board[(y + 1) * boardWidth + (x - 1)],
    board[(y + 1) * boardWidth + (x + 0)],
    board[(y + 1) * boardWidth + (x + 1)], //下3マス
  ]
  for (var i = 0; i < adjcells.length; i++) {
    if (typeof adjcells[i] === 'undefined');
  }
}*/
