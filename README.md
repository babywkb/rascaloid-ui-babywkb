```console
npm install
npm start
```

うらがみさんのに加えて
↓の２つのパッケージ追加してます
semantic-ui-react
semantic-ui-css

【課題1】
http://localhost:3000/projects/1/iterations/1  
の画面まで行ってタスク詳細の編集はできるが、編集初回の画面の挙動がおかしい

【課題2】  
タスク編集フォームの値を編集したら即時Task.descriptionの値が変更されてしまう。onChangeでは画面に出てるvalueだけ変わって欲しくて、onKeyPressでTask.descriptionの値を変えたいのに...  

【課題3】
Iteration.jsの中で値をバケツリレーしてて読みにくいし、修正もしにくい...。しかし、解消方法がわからない。

【課題4】
Taskの値を編集するたびに  
StoryListに入ってる、特定のStoryのTaskListの中の、特定のTaskの何のプロパティーを変えるのかを指定しなきゃならんのが辛すぎる  
(配列の中のオブジェクトの中の配列の中のオブジェクトが持つ値)を変える状態...