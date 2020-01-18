// "map" divに地図を作成し、指定した場所とズームで表示する
var map = L.map('map').setView([35.3, 139.4], 6);

// OpenStreetMapタイルレイヤーを追加する
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(map);

const textbox = document.getElementById("textbox").value;
const exe = document.getElementById("exe");
exe.onclick = ()=>{
  if(textbox === "kantou"){
    map = L.map('map').setView([35.3, 139.4], 10);
  }
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }).addTo(map);
}
