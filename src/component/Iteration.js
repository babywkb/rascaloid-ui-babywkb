import React from 'react';
import { List } from 'semantic-ui-react'
import HeaderExamplePlugIcon from './HeaderExamplePlugIcon'
import 'semantic-ui-css/semantic.min.css'
import ModalModal from './ModalModal'


const ActionShowStories = ({ story }) => (
    <List divided relaxed>
        {story.map((story) => (
            <List.Item key={story.storyId}>
                <List.Icon name='tasks' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header>StoryTitle{story.title}</List.Header>
                    <List.Description as='a'>{story.description}</List.Description>
                </List.Content>
                <ModalModal />
            </List.Item>
        ))}
    </List>
)

export default ({ projectId, iterationId, story }) => (
    <div>
        <h1>Iteration {iterationId} (Project {projectId})</h1>
        <ActionShowStories story={story} />

        <ul>
            <li>TODO ストーリーとタスクのデータを保持するStoreを作る</li>
            <li>TODO ストーリーの一覧を表示する</li>
            <li>TODO タスクの一覧をレーン別に表示する</li>
            <li>TODO タスクをレーン移動できるようにする（まだアサインはできなくて良い）</li>
        </ul>
    </div>
);