# FIT2019b

2019 年秋学期 情報基礎 2 授業課題提出用 repository

- [情報基礎 2 授業ページ](https://ipl.sfc.keio.ac.jp/text/info2-2019-9/)
- [情報基礎 2 2019 秋学期 github リポジトリ](https://github.com/FIT-sakitsu/2019b)

## 環境構築

### github アカウントを作成

1. [github.com](https://github.com/) にアクセスしてアカウントを作成
   1. 社会人になっても使う可能性があるため、アカウント名はログイン名以外にしたほうが得策です
2. 作成したアカウント名を担当教員にメール[sakitsu@sfc.keio.ac.jp](mailto:sakitsu@sfc.keio.ac.jp)で共有してください
   1. 課題提出用 repository へのアクセス権限を付与します

### リポジトリを clone

1. ターミナルを起動
2. 授業課題用フォルダを作成 `mkdir -p ~/FIT2`
3. 授業課題用フォルダに移動 `cd ~/FIT2`
4. git リポジトリを clone `git clone https://github.com/FIT-sakitsu/2019b`

## 課題を提出する

### 作業用ブランチを作成

1. ターミナルを起動
2. 授業課題を扱うディレクトリに移動 `cd ~/FIT2/2019b`
3. Master ブランチに切り替え `git checkout master`
4. Master ブランチを最新化 `git pull`
5. 課題提出用のブランチを作成 `git checkout -b 'ex01/t09415is'`
   1. `ex01` は授業番号に適宜置換
   2. `t09415is` は各自のログイン名に適宜置換

### 課題を解く

1. 課題提出用のフォルダを作成 `mkdir -p ex01/t09415is`
   1. `ex01` は授業番号に適宜置換
   2. `t09415is` は各自のログイン名に適宜置換
2. 作成したディレクトリ内 (例:ex01/t09415is) 内に課題ファイルを作成します

### github で提出する

1. ターミナルを起動
2. 授業課題を扱うディレクトリに移動 `cd ~/FIT2/2019b`
3. 作成したファイルを git に追加 `git add .`
4. ファイルをコミット`git commit -m 'ex01を作成'`
   1. `ex01を作成` は適切なメッセージに適宜置換
5. `git push --set-upstream origin ex01/t09415is`
   1. ex01/t09415is 部は 3. で作成したブランチ名に適宜置換
6. [情報基礎 2 2019 秋学期 github リポジトリ](https://github.com/FIT-sakitsu/2019b) を開く
7. Pull request 作成ボタンが表示されるのでクリック
   ![参考画像](https://user-images.githubusercontent.com/2434962/65457116-ce059600-de85-11e9-907c-1d7bbbdc9bcb.png '参考画像')
8. タイトルと Label を適切に設定修正して課題を提出
   ![参考画像](https://user-images.githubusercontent.com/55714483/65457734-2e490780-de87-11e9-8523-f4f7af2fdc89.png '参考画像')
