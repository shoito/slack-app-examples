# Slack マルチステップモーダルサンプル

Slack アプリケーションの App Home から起動するモーダルのサンプルです。  
マルチステップモーダルを試しています。

## バックエンドの実行方法

```
$ ngrok http 3000
```

```
$ export SLACK_SIGNING_SECRET=a8b9xxx
$ export SLACK_BOT_TOKEN=xoxb-12345

$ npm run start
```
