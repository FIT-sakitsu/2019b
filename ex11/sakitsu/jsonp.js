function func(json) {
  var ele = document.getElementById('result')

  var i
  for (i = 0; i < json.query.allpages.length; i++) {
    ele.innerHTML += i + ': ' + json.query.allpages[i].title + '<br />'
  }
}

function loadFromWikipedia() {
  var e = document.getElementById('result')
  var o = document.createElement('script')
  o.setAttribute(
    'src',
    'https://ja.wikipedia.org/w/api.php?action=query&list=allpages&apfrom=東京&aplimit=10&format=json&callback=func'
  )
  e.appendChild(o)
}
