import React from 'react';
import {
    List,
    Button,
    Card,
    Icon,
    Grid,
    Segment
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import TaskEditor from './TaskEditor'

const TaskCard = ({task,condition}) => (
    <Card.Group>
    {task.filter((task) => task.condition === condition).map(task => (
    <Card key={task.taskId}>
        <Card.Content>
            <Card.Header>
                TaskTitle{task.title}
            </Card.Header>
            <Card.Meta></Card.Meta>
            <Card.Description>
                {task.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className='ui two buttons'>
                <TaskEditor/>
                <Button color='red'>削除</Button>
            </div>
        </Card.Content>
    </Card>
    ))}
</Card.Group>
)

const ActionShowStories = ({story}) => (
    <Segment>
        <List divided relaxed>
            {story.map((story) => (
                <List.Item key={story.storyId}>
                    <List.Content>
                        <List.Header>StoryTitle{story.title}</List.Header>
                        <Grid columns={3} divided>
                            <Grid.Row>
                                <Grid.Column>
                                    TODO
                                    <TaskCard task={story.task} condition='todo'/>
                                </Grid.Column>
                                <Grid.Column>
                                    DOING
                                    <TaskCard task={story.task} condition='doing'/>
                                </Grid.Column>
                                <Grid.Column>
                                    DONE
                                    <TaskCard task={story.task} condition='done'/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </List.Content>
                </List.Item>
            ))}
        </List>
    </Segment>
)

export default({projectId, iterationId, story}) => (
    <div>
        <h1>
            <Icon name='wait' size='large'/>
            Iteration {iterationId}
            (Project {projectId})</h1>
        <ActionShowStories story={story} />

        <ul>
            <li>TODO ストーリーとタスクのデータを保持するStoreを作る</li>
            <li>TODO ストーリーの一覧を表示する</li>
            <li>TODO タスクの一覧をレーン別に表示する</li>
            <li>TODO タスクをレーン移動できるようにする（まだアサインはできなくて良い）</li>
        </ul>
    </div>
);