function n3() {
    var str = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var ele = document.getElementById("text080201");

    var t_start = (new Date).getTime();

    for (var i=0; i<str.length; i++) {
        for (var j=0; j<str.length; j++) {
            for (var k=0; k<str.length; k++) {
                ele.value = str[i] + str[j] + str[k];
            }
        }
    }

    var t_end = (new Date).getTime();

    alert("かかった時間は" + (t_end - t_start) + "ミリ秒です");
}
