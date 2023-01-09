# 環境構築方法（MacOS 向け）

## Homebrew

- 以下のサイトを参考に Homebrew をインストールしてください。
- [参考：【初心者向け】Homebrew のインストール方法を解説！](https://aiacademy.jp/media/?p=2817)

## Git

- 以下のサイトを参考に Git をインストールしてください。
- [参考：Mac に Homebrew から git をインストールする方法](https://hirooooo-lab.com/development/install-git-by-homebrew/)
- 参考ページ中に以下のようなサンプルコードがありますが、実際に自分の PC の画面にコマンドを入力する際には「`$`」マークをつけないで入力してください（「`$`」マークを入力するとうまく動作しません）

```
$ git --version　← 左のサンプルコードの「$」マークは自分のPCのターミナルに入力しない
git version 2.21.1 (Apple Git-122.3)
```

- Git のインストールが完了したら以下のサイトの「1. プロジェクトをまたいだ全体の設定（グローバル, global）」を参考に git のユーザー名・メールアドレスを設定してください
- [参考：Git でユーザー名とメールアドレスを設定する方法（全体用とプロジェクト用）](https://laboradian.com/set-git-user-and-email/#1_global)

## Curl

- 以下のサイトを参考に Curl をインストールしてください。
- [参考：Mac から curl を使う方法をご紹介！](https://aprico-media.com/posts/8236)

## Node.js

- 今回は nvm を用いて Node.js のインストール/バージョン管理を行います
- 以下のサイトを参考に nvm をインストールしてください
- [nvm(Node Version Manager)を使って Node.js をインストールする手順](https://qiita.com/ffggss/items/94f1c4c5d311db2ec71a)
- nvm のインストールが完了したら 2022 年 1 月 9 日時点では Node.js の LTS が v18.13.0 のため以下のコマンドを入力して v18.13.0 の Node.js をインストールしてください。

```
$ nvm install 18.13.0
----以下、実行結果----
Downloading and installing node v18.13.0...
Downloading https://nodejs.org/dist/v18.13.0/node-v18.13.0-darwin-x64.tar.xz...
########################################################################################################################################################################### 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v18.13.0 (npm v8.19.2)
Creating default alias: default -> 18.13.0 (-> v18.13.0)
--------------------
```

- 以下のコマンドを入力して Node.js の v18.13.0 が使用されていることを確認してください。

```
$ node -v
----以下、実行結果----
v18.13.0
--------------------
```

- 上記タイミングで v18.13.0 以外が出る場合は以下のコマンドを入力して Node.js のバージョンを切り替えてください

```
$ nvm ls
----以下、実行結果(v18.13.0がインストールされていることを確認)-------
->     v18.13.0
default -> 18.13.0 (-> v18.13.0)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v18.13.0) (default)
stable -> 18.12 (-> v18.13.0) (default)
lts/* -> lts/hydrogen (-> v18.13.0)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.21.1 (-> N/A)
lts/gallium -> v16.18.1 (-> N/A)
lts/hydrogen -> v18.13.0
------------------------------------------------------------
$ nvm use 18.13.0
----以下、実行結果(使用するNode.jsのバージョンをv18.13.0に変更)----
Now using node v18.13.0 (npm v8.19.2)
------------------------------------------------------------
```

## リモートレポジトリのクローン

- 以下のコマンドを入力して任意のディレクトリに本レポジトリを clone してください

```
$ git clone https://github.com/Naoya-abe/react-ts-todo.git
```

## アプリケーションの立ち上げ

- アプリケーションの clone が完了したら以下のコマンドを入力することで`http://localhost:3000`でアプリケーションが立ち上がります

```
$ cd react-ts-todo
$ npm i
$ npm run start
```

- ブラウザにて、URL の入力欄に`http://localhost:3000`と入力するとアプリケーションの動作確認ができます

## CodeFormatter の導入

- 以下の 2 つの拡張機能を VSCode に入れてください
  - Prettier - Code formatter
  - ESLint

[参考：npm で React(TypeScript) に ESLint と Prettier を導入](https://zenn.dev/nakashi94/articles/f67fa9b54437da)
