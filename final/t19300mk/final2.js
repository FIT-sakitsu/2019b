document.addEventListener('DOMContentLoaded', function () {
    const els    = document.querySelectorAll('button'),
          hand   = new Map(),
          result = new Map([
              [0, 'あいこ'],
              [1, '負け'],
              [2, '勝ち']
          ]);

    for (var i = 0, count = els.length; i < count ; i++) {
        const num = parseInt(els[i].dataset.num),
              val = els[i].innerText;

        hand.set(num, val);

        els[i].addEventListener('click', function () {
            const playerChoice = num,
                  enemyChoice  = Math.floor(Math.random() * 3 + 1),
                  judge        = (playerChoice - enemyChoice + 3) % 3;

            document.getElementById('result').innerHTML =
                `<h2>結果</h2>` +
                `<p><b>あなた:</b> ${hand.get(playerChoice)}<br>` +
                `<b>あいて:</b> ${hand.get(enemyChoice)}</p>` +
                `<p><b>「${result.get(judge)}」</b>です</p>`;
        });
    }
});
bubbly();
