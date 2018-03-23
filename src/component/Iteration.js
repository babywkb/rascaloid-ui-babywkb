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
import {updateTaskDescription, fetchStoryList} from '../actions'
import StoryListStore from '../store/StoryListStore';

const TaskEditor = ({storyList, story, task}) => {
    return (
        <Modal trigger={<Button color = 'green' > 詳細 </Button>}>
            <Modal.Header>edit Your Task</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>タスク編集画面</Header>
                    <p>{task.description}</p>
                    <Form>
                        <Form.Field>
                            <label>タスク詳細</label>
                            <input
                                value={task.description}
                                storyList={storyList}
                                story={story}
                                task={task}
                                onChange={event => updateTaskDescription(story, task, event.target.value)}/>
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

const TaskComponent = ({storyList, story, statusName}) => (
    <div>
    <Card.Group>
        {story
            .taskList
            .list
            .filter((task) => task.statusName === statusName)
            .map(task => (
                <Card key={task.id}>
                    <Card.Content>
                        <Card.Header>
                            TaskSubject{task.subject}
                        </Card.Header>
                        <Card.Meta></Card.Meta>
                        <Card.Description>
                            {task.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <TaskEditor task={task} storyList={storyList} story={story}/>
                    </Card.Content>
                </Card>
            ))}
    </Card.Group>
    </div>
)

const StoryComponent = ({storyList}) => (
    <div>
    <Segment>
        <List divided relaxed>
            {storyList
                .list
                .map((story) => (
                    <List.Item key={story.id}>
                        <List.Content>
                            <List.Header>StorySubject【{story.subject}】</List.Header>
                            <Grid columns={3} divided>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header>TODO</Header>
                                        <TaskComponent storyList={storyList} story={story} statusName="TODO"/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header>DOING</Header>
                                        <TaskComponent storyList={storyList} story={story} statusId="DOING"/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header>DONE</Header>
                                        <TaskComponent storyList={storyList} story={story} statusId="DONE"/>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </List.Content>
                    </List.Item>
                ))}
        </List>
    </Segment>
    </div>
)

export default class Iteration extends React.Component {
    static getStores() {
        return [StoryListStore];
    }

    static calculateState = (prevState, {
        match: {
            params: {
                projectId,
                iterationId
            }
        }
    }) => {
        return {
            projectId,
            iterationId,
            storyList: StoryListStore.getState()
        };
    };

    componentDidMount() {
        fetchStoryList(this.state.projectId);
    }

    render() {
        return (
            <div>
                <h1>
                    <Icon name='wait' size='large'/>
                    Iteration {this.state.iterationId}
                    (Project {this.state.projectId})
                </h1>
                <StoryComponent storyList={this.state.storyList} />
            </div>
        );
    }
}