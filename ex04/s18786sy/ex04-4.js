function aaaaa(){
  var l = prompt('試行回数を入力してください')
  var m = 0;
  for(n = 1; n <= l; n++){
    var x = Math.random();
    var y = Math.random();
    if((x*x) + (y*y) <= 1){
      m++;
    }
  }
  var z = (4 * m) / n;
  alert(z)
}
