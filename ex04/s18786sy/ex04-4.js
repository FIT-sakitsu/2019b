function aaaaa(){
  var l = prompt('試行回数を入力してください')
  var m = 0;
  for(n = 0; n < l; n++){
    var x = Math.random();
    var y = Math.random();
    if(Math.pow(x, 2) + Math.pow(y, 2) <= 1){
      m++;
    }
  }
  var Pi = (4 * m) / l;
  alert(Pi)
}
