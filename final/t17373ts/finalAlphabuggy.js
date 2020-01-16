var Reversi = function() {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d') //canvas作製

  var column = 8 //盤面横マス数
  var row = 8 //盤面縦マス数
  var cellWidth = 500 / column
  var stoneRadius = (cellWidth * 0.8) / 2 //コマの直径

  var board = []

  //ルーチン関数s
  var twoDToOneD = function(x, y) {
    return y * row + x
  }
  var oneDToTwoD = function(idx) {
    return [idx % row, Math.floor(idx / row)]
  }
  var xyInRange = function(x, y) {
    if (x < 0 || x >= row) return false //左端と右端が
    if (y < 0 || y >= column) return false //上端と下端が
    if (maskX[i] < 0 || maskX[i] >= row) return false //左端と右端が
    if (maskY[i] < 0 || maskY[i] >= column) return false //上端と下端が
    return true
  }

  var coordsToIdx = function(x, y) {
    //枠内の座標でクリックしたら枠左上の点を選んたことにする
    var j = Math.floor(x / cellWidth)
    var i = Math.floor(y / cellWidth)
    return twoDToOneD(j, i) //
  }
  //end ルーチン関数s

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
        var idx = twoDToOneD(j, i) //検索する基準のマス目
        var stoneColor = board[idx]
        if (stoneColor !== 2) {
          ctx.beginPath()
          ctx.arc(x + cellWidth / 2, y + cellWidth / 2, stoneRadius, 0, 6.28)
          ctx.closePath()
          ctx.strokeStyle = '#fff'
          if (stoneColor === 0) {
            ctx.fillStyle = '#000'
          } else {
            ctx.fillStyle = '#fff'
          }
          ctx.stroke()
          ctx.fill()
        }
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
    /*tet section*/
    for (var i = 0; i < 8; i++) {
      board[i] = 1
    }
    for (var i = 0; i < 8; i++) {
      board[i + 8] = 2
    }
    for (var i = 0; i < 8; i++) {
      board[i + 16] = 0
    }
  }
  init()
  render()

  this.init = init
  this.render = render
  color = 0
  antiColor = 1

  var maskX = [-1, 0, 1, -1, 1, -1, 0, 1]
  var maskY = [-1, -1, -1, 0, 0, 1, 1, 1]

  var findFlipped = function(idx) {
    var xy = oneDToTwoD(idx) //xyが２次元配列、idxが1次元配列
    var flipped = []
    for (var i = 0; i < maskX.length; i++) {
      if (xyInRange(xy[0] + maskX[i], xy[1] + maskY[i])) {
        //if in range
        var idx2 = twoDToOneD(xy[0] + maskX[i], xy[1] + maskY[i]) //idxの周りの8マス座標の配列
        if (board[idx2] === antiColor) {
          //different color: begin search
          //console.log(idx2,board[idx2],antiColor);
          var j = 2
          var matches = [idx2]
          while (true) {
            if (xyInRange(xy[0] + maskX[i] * j, xy[1] + maskY[i] * j)) {
              var idx3 = twoDToOneD(xy[0] + maskX[i] * j, xy[1] + maskY[i] * j) //周りに8マス以降放射状に伸びた先のマス
              if (board[idx3] === antiColor) {
                matches.push(idx3)
              } else if (board[idx3] === color) {
                //found match, add pairs
                flipped.push(matches)
                break
              }
            } else {
              break
            }
            j++
          }
        } //else if same color or empty don't search
      } //else if not in range don't search
    }
    return flipped
  }

  var changeColor = function() {
    var c0 = color
    color = antiColor
    antiColor = c0
  }

  var countStones = function() {
    var blackCount = 0
    var whiteCount = 0

    for (var i = 0; i < board.length; i++) {
      switch (board[i]) {
        case 0:
          blackCount++
          break
        case 1:
          whiteCount++
          break
      }
    }
    document.getElementById('blackCountHtml').value = blackCount
    document.getElementById('whiteCountHtml').value = whiteCount
  }

  var canvasOnclick = function(e) {
    //クリックすることで座標の情報を獲得
    var x = e.offsetX
    var y = e.offsetY
    var idx = coordsToIdx(x, y)
    if (board[idx] === 2) {
      var flipped = findFlipped(idx)
      if (flipped.length === 0) {
        console.log("you can't place there")
        turn.innerHTML = 'そこには置けません！もう一度操作してください。'
        return false
      } else {
        board[idx] = color
        for (var i = 0; i < flipped.length; i++) {
          for (var j = 0; j < flipped[i].length; j++) {
            board[flipped[i][j]] = color
          }
        }
        render()
        changeColor()
        if (color === 0) {
          console.log("Black's turn")
          turn.innerHTML = '黒のターン！黒側が操作してください。'
        } else {
          console.log("White's turn")
          turn.innerHTML = '白のターン！白側が操作してください。'
        }
      }
    }
    countStones()
    gameSet()
  }

  canvas.addEventListener('click', canvasOnclick.bind(this), false)

  var gameSet = function() {
    if (
      parseInt(document.getElementById('blackCountHtml').value, 10) +
        parseInt(document.getElementById('whiteCountHtml').value, 10) ===
      64
    ) {
      alert('ゲーム終了！')
      window.location.href = finalResultScreen.html
    }
  }
}
var reversi = new Reversi()
