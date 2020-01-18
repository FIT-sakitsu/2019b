var Reversi = function() {
  // canvas
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d') //canvas作製

  // settings
  const columnSize = 8 //盤面横マス数
  const rowSize = 8 //盤面縦マス数
  const cellWidth = 500 / columnSize
  const stoneRadius = (cellWidth * 0.8) / 2 //コマの直径
  const black = 0
  const white = 1
  const empty = 2
  const maskX = [-1, 0, 1, -1, 1, -1, 0, 1]
  const maskY = [-1, -1, -1, 0, 0, 1, 1, 1]

  // params
  var board = []
  var passedLastTurn = false
  var player = black
  var counterPlayer = white

  // 補助関数
  var twoDToOneD = function(col, row) {
    return row * rowSize + col
  }

  var oneDToTwoD = function(idx) {
    return [idx % rowSize, Math.floor(idx / rowSize)]
  }

  var coordsToIdx = function(x, y) {
    //枠内の座標でクリックしたら枠左上の点を選んたことにする
    var j = Math.floor(x / cellWidth)
    var i = Math.floor(y / cellWidth)
    return twoDToOneD(j, i) //
  }

  var xyInRange = function(x, y) {
    if (x < 0 || x >= rowSize) return false //左端と右端が
    if (y < 0 || y >= columnSize) return false //上端と下端が
    if (maskX[i] < 0 || maskX[i] >= rowSize) return false //左端と右端が
    if (maskY[i] < 0 || maskY[i] >= columnSize) return false //上端と下端が
    return true
  }

  var isEmptyCell = function(idx) {
    return board[idx] == empty
  }
  //end 補助関数

  var render = function() {
    // 盤面
    ctx.fillStyle = '#080'
    ctx.fillRect(0, 0, cellWidth * rowSize, cellWidth * columnSize)

    // 列の罫線
    for (i = 0; i < columnSize + 1; i++) {
      var y = i * cellWidth
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(cellWidth * rowSize, y)
      ctx.closePath()
      ctx.strokeStyle = '#000'
      ctx.stroke()
    }

    // 行の罫線
    for (i = 0; i < rowSize + 1; i++) {
      var x = i * cellWidth
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, cellWidth * columnSize)
      ctx.closePath()
      ctx.strokeStyle = '#000'
      ctx.stroke()
    }

    // コマを描画
    for (i = 0; i < columnSize; i++) {
      var y = i * cellWidth
      for (j = 0; j < rowSize; j++) {
        var x = j * cellWidth

        //オセロ本体
        var idx = twoDToOneD(j, i) //検索する基準のマス目
        var stoneColor = board[idx]
        if (!isEmptyCell(idx)) {
          ctx.beginPath()
          ctx.arc(x + cellWidth / 2, y + cellWidth / 2, stoneRadius, 0, 6.28)
          ctx.closePath()
          ctx.strokeStyle = '#fff'
          if (stoneColor === black) {
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
    for (var i = 0; i < columnSize * rowSize; i++) {
      board[i] = empty //2 is empty
    }
    //fill the center 4

    board[27] = black
    board[28] = white
    board[35] = white
    board[36] = black

    turn.innerHTML = '黒のターン！黒側が操作してください。'

    document.getElementsByName('blackCount')[0].value = 2
    document.getElementsByName('whiteCount')[0].value = 2
    render()
  }

  this.init = init

  var findFlipped = function(idx) {
    var xy = oneDToTwoD(idx) //xyが２次元配列、idxが1次元配列
    var flipped = []
    for (var i = 0; i < maskX.length; i++) {
      if (xyInRange(xy[0] + maskX[i], xy[1] + maskY[i])) {
        //if in range
        var idx2 = twoDToOneD(xy[0] + maskX[i], xy[1] + maskY[i]) //idxの周りの8マス座標の配列
        if (board[idx2] === counterPlayer) {
          //different color: begin search
          //console.log(idx2,board[idx2],counterPlayer);
          var j = 2
          var matches = [idx2]
          while (true) {
            if (xyInRange(xy[0] + maskX[i] * j, xy[1] + maskY[i] * j)) {
              var idx3 = twoDToOneD(xy[0] + maskX[i] * j, xy[1] + maskY[i] * j) //周りに8マス以降放射状に伸びた先のマス
              if (board[idx3] === counterPlayer) {
                matches.push(idx3)
              } else if (board[idx3] === player) {
                //found match, add pairs
                flipped.push(matches)
                break
              } else {
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

  var changePlayer = function() {
    var tmp = player
    player = counterPlayer
    counterPlayer = tmp
  }

  var countStones = function() {
    var blackCount = 0
    var whiteCount = 0

    for (var i = 0; i < board.length; i++) {
      switch (board[i]) {
        case black:
          blackCount++
          break
        case white:
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
    if (isEmptyCell(idx)) {
      var flipped = findFlipped(idx)
      if (flipped.length === 0) {
        console.log("you can't place there")
        turn.innerHTML = 'そこには置けません！もう一度操作してください。'
        return false
      } else {
        board[idx] = player
        for (var i = 0; i < flipped.length; i++) {
          for (var j = 0; j < flipped[i].length; j++) {
            board[flipped[i][j]] = player
          }
        }
        render()
        changePlayer()
        if (player === 0) {
          console.log("Black's turn")
          turn.innerHTML = '黒のターン！黒側が操作してください。'
        } else {
          console.log("White's turn")
          turn.innerHTML = '白のターン！白側が操作してください。'
        }
      }
      countStones()

      if (!canPutStone()) {
        if (passedLastTurn) {
          alert('ゲーム終了')
          console.log('Game Over')
          window.location.href = 'finalResultScreen.html'
        }

        // 次のプレイヤーはぱすせざるを得ない
        alert('置ける場所がありません！相手にターンを回します！')
        changePlayer()
        passedLastTurn = true
      } else {
        passedLastTurn = false
      }
    }
  }

  canvas.addEventListener('click', canvasOnclick.bind(this), false)

  var canPutStone = function() {
    var canPlace = []
    for (var idx = 0; idx < board.length; idx++) {
      if (isEmptyCell(idx)) {
        var flipped = findFlipped(idx)
        if (0 < flipped.length) {
          canPlace.push(idx)
        }
      }
    }
    return canPlace.length > 0
  }
}

var reversi = new Reversi()
reversi.init()
