# FIT2019b
2019年秋学期 情報基礎2授業課題提出用repository

- [情報基礎2 授業ページ](https://ipl.sfc.keio.ac.jp/text/info2-2019-9/)
- [情報基礎2 2019秋学期 githubリポジトリ](https://github.com/FIT-sakitsu/2019b)

## 環境構築
### githubアカウントを作成
1. [github.com](https://github.com/) にアクセスしてアカウントを作成
    1. 社会人になっても使う可能性があるため、アカウント名はログイン名以外にしたほうが得策です
2. 作成したアカウント名を担当教員にメール[sakitsu@sfc.keio.ac.jp](mailto:sakitsu@sfc.keio.ac.jp)で共有してください
    1. 課題提出用repositoryへのアクセス権限を付与します

### リポジトリをclone
1. ターミナルを起動
2. 授業課題用フォルダを作成 ```mkdir -p ~/FIT2```
3. 授業課題用フォルダに移動 ```cd ~/FIT2```
4. gitリポジトリをclone ```git clone https://github.com/FIT-sakitsu/2019b```

## 課題を提出する
### 作業用ブランチを作成
1. ターミナルを起動
2. リポジトリに移動する```cd ~/FIT2/2019b```
3. 課題提出用のブランチを作成 ```git checkout -b 'ex01/t09415is'```
    1. `ex01` は授業番号に適宜置換
    2. `t09415is` は各自のログイン名に適宜置換
4. 課題提出用のフォルダを作成 ```mkdir -p ex01/t09415is```
    1. `ex01` は授業番号に適宜置換
    2. `t09415is` は各自のログイン名に適宜置換
    
### 課題を解く
作成したディレクトリ内 (例:ex01/t09415is) 内に課題ファイルを作成します

### githubで提出する
1. ターミナルを起動
2. リポジトリに移動する```cd ~/FIT2/2019b```
3. 作成したファイルをgitに追加```git add .```
4. ファイルをコミット```git commit -m 'ex01を作成'```
    1. `ex01を作成` は適切なメッセージに適宜置換
5. ```git push --set-upstream origin ex01/t09415is```
    1. ex01/t09415is 部は 3. で作成したブランチ名に適宜置換
6. [情報基礎2 2019秋学期 githubリポジトリ](https://github.com/FIT-sakitsu/2019b) を開く
7. Pull request作成ボタンが表示されるのでクリック
![参考画像](https://user-images.githubusercontent.com/2434962/65457116-ce059600-de85-11e9-907c-1d7bbbdc9bcb.png "参考画像")
8. タイトルとLabelを設定修正して提出
![参考画像](https://user-images.githubusercontent.com/55714483/65457734-2e490780-de87-11e9-8523-f4f7af2fdc89.png "参考画像")
