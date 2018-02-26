import React from 'react'
import { List } from 'semantic-ui-react'

let messageArray = ['TODO プロジェクトのデータを保持するStoreを作る','TODO プロジェクトの一覧を表示する'];

const ListExampleDivided = messageArray => (
  <List divided relaxed>
    <List.Item>
      <List.Icon name='tasks' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>てすてす</List.Header>
        <List.Description as='a'>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleDivided
