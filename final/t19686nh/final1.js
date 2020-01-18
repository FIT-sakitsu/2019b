var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

window.requestAnimFrame = (function() {
  //アニメーション実装
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()

var dots = [] // ドットの配列
var density = 15 //ドットの密度
var colors = ['#00FF00']
var baseSpeed = 15 // スピード
var baseSize = 8 // 大きさ

function feed() {
  baseSize += 3
}

function reload() {
  window.location.reload()
}

var num = document.getElementById('number')

function IncreaseDensity() {
  density += 3
  dots.push(new dot())
  dots.push(new dot())
  dots.push(new dot())
  num.value = density
}

function light_print(event) {
  var elm = document.getElementById('lighttext')
  elm.value = event.value

  if (elm.value >= 500) {
    IncreaseDensity()
  }
}
window.addEventListener('devicelight', light_print)

function speedup() {
  for (var i = 0; i < dots.length; i++) {
    var multiple = Math.random() * 2
    dots[i].speed = dots[i].speed + (-1 + multiple)
    dots[i].vec = {
      x: Math.cos(dots[i].angle) * dots[i].speed,
      y: Math.sin(dots[i].angle) * dots[i].speed,
    }
  }
}

var dot = function() {
  this.size = baseSize //大きさ
  this.color = colors //色
  this.speed = baseSpeed / this.size // 大きさによって速度変更
  this.pos = {
    // 位置
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
  }

  var rot = Math.random() * 360 // ランダムな角度
  this.angle = (rot * Math.PI) / 180
  this.vec = {
    // 移動方向
    x: Math.cos(this.angle) * this.speed,
    y: Math.sin(this.angle) * this.speed,
  }
}

dot.prototype = {
  update: function() {
    this.draw()
    this.pos.x += this.vec.x
    this.pos.y += this.vec.y // 画面外に出たら反対へ再配置
    if (this.pos.x > canvas.width + 10) {
      this.pos.x = -10
    } else if (this.pos.x < -10) {
      this.pos.x = canvas.width + 10
    } else if (this.pos.y > canvas.height + 10) {
      this.pos.y = -10
    } else if (this.pos.y < -10) {
      this.pos.y = canvas.height + 10
    }
  },

  draw: function() {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, baseSize, 0, 2 * Math.PI, false)
    ctx.fill()
  },
}

function update() {
  requestAnimFrame(update) // 描画をクリア

  // 背景色を水色に塗る
  ctx.fillStyle = '#CCFFFF'
  ctx.fillRect(0, 0, 500, 500)
  ctx.beginPath()

  // dots[i].updateを実行
  for (var i = 0; i < density; i++) {
    dots[i].update()
  }
}

function init() {
  for (var i = 0; i < density; i++) {
    dots.push(new dot())
  }
  update()
}
init()
//
