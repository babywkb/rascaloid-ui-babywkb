import React from 'react';
import {
    List,
    Button,
    Card,
    Icon,
    Grid,
    Segment,
    Header,
    Modal,
    Form,
    Checkbox
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {updateTaskDescription} from '../actions'

const TaskEditor = ({storyList, story, task}) => {
    return (
        <Modal trigger={< Button color = 'green' > 詳細 </Button>}>
            <Modal.Header>edit Your Task</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>タスク編集画面</Header>
                    <p>{task.description}</p>
                    <Form>
                        <Form.Field>
                            <label>タスク詳細</label>
                            <input value={task.description} storyList={storyList} story={story} task={task} 
                            onChange={event => updateTaskDescription(story,task, event.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <Checkbox radio label='Choose this' name='checkboxRadioGroup' value='this'/>
                        </Form.Field>
                        <Form.Field>
                            <Checkbox radio label='Or that' name='checkboxRadioGroup' value='that'/>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

const TaskComponent = ({storyList, story, condition}) => (
    <Card.Group>
        {story.taskList.list.filter((task) => task.condition === condition).map(task => (
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
                        <TaskEditor task={task} storyList={storyList} story={story}/>
                    </div>
                </Card.Content>
            </Card>
        ))}
    </Card.Group>
)

const StoryComponent = ({storyList}) => (
    <Segment>
        <List divided relaxed>
            {storyList.list.map((story) => (
                <List.Item key={story.storyId}>
                    <List.Content>
                        <List.Header>StoryTitle【{story.title}】</List.Header>
                        <Grid columns={3} divided>
                            <Grid.Row>
                                <Grid.Column>
                                    TODO
                                    <TaskComponent storyList={storyList} story={story} condition='todo'/>
                                </Grid.Column>
                                <Grid.Column>
                                    DOING
                                    <TaskComponent storyList={storyList} story={story} condition='doing'/>
                                </Grid.Column>
                                <Grid.Column>
                                    DONE
                                    <TaskComponent storyList={storyList} story={story} condition='done'/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </List.Content>
                </List.Item>
            ))}
        </List>
    </Segment>
)

export default({projectId, iterationId, storyList}) => (
    <div>
        <h1>
            <Icon name='wait' size='large'/>
            Iteration {iterationId}
            (Project {projectId})</h1>
        <StoryComponent storyList={storyList}/>

        <ul>
            <li>TODO ストーリーとタスクのデータを保持するStoreを作る</li>
            <li>TODO ストーリーの一覧を表示する</li>
            <li>TODO タスクの一覧をレーン別に表示する</li>
            <li>TODO タスクをレーン移動できるようにする（まだアサインはできなくて良い）</li>
        </ul>
    </div>
);