function func(json) {
  var ele = document.getElementById('result')

  for (var i = 0; i < json.query.allpages.length; i++) {
    ele.innerHTML += i + ':' + json.query.allpages[i].title + '<br>'
  }
}

function loadFromWiki() {
  var e = document.getElementById('result')
  var o = document.createElement('script')
  o.setAttribute(
    'src',
    'http://ja.wikipedia.org/w/api.php?action=query&list=allpages&apfrom=慶應&aplimit=50&format=json&callback=func'
  )
  e.appendChild(o)
}
