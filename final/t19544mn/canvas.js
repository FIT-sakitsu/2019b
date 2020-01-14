var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 500, 500);


function light_change(event) {
  var elm = event.value;
  alert(elm);
  if(elm >= 1000) {
    ctx.fillStyle = 'lightgrey'
    ctx.fillArc(250, 250, 200, Math.pi * 2);
    ctx.fillStyle = 'red'
    ctx.fillText("鍵は左", 200, 200);
  }
  else {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 500, 500);
  }
}
window.addEventListener('devicelight', light_change);
