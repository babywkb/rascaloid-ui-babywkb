
# ビルド

まずJavaScriptをビルドします。

```console
npm run build
# もしくは yarn build
```

次にDockerイメージをビルドします。

```console
docker build -t team-cerezo/takata-roid:latest .
```

# 実行

Dockerで実行します。
（先にrascaloid-apiを起動しておく必要があります）

```
docker run --name=rascaloid-ui -d -p 8080:80 --link rascaloid-api team-cerezo/takata-roid
```