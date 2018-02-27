import React from 'react';
import {List, Button, Card, Image} from 'semantic-ui-react'
import HeaderExamplePlugIcon from './HeaderExamplePlugIcon'
import 'semantic-ui-css/semantic.min.css'
import ModalModal from './ModalModal'

const ActionShowStories = ({story}) => (
    <List divided relaxed>
        {story.map((story) => (
            <List.Item key={story.storyId}>
                <List.Content>
                    <Card.Group>
                        <Card>
                            <Card.Content>
                                <List.Icon name='tasks' size='large' verticalAlign='middle'/>
                                <Card.Header>
                                    StoryTitle{story.title}
                                </Card.Header>
                                <Card.Meta>
                                    Friends of Elliot
                                </Card.Meta>
                                <Card.Description>
                                    {story.description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <ModalModal/>
                                    <Button color='red'>削除</Button>
                                </div>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </List.Content>
            </List.Item>
        ))}
    </List>
)

export default({projectId, iterationId, story}) => (
    <div>
        <h1>Iteration {iterationId}
            (Project {projectId})</h1>
        <ActionShowStories story={story}/>
        <ul>
            <li>TODO ストーリーとタスクのデータを保持するStoreを作る</li>
            <li>TODO ストーリーの一覧を表示する</li>
            <li>TODO タスクの一覧をレーン別に表示する</li>
            <li>TODO タスクをレーン移動できるようにする（まだアサインはできなくて良い）</li>
        </ul>
    </div>
);