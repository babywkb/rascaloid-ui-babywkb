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
        <Modal trigger={< Button color = 'green' > 詳細 </Button>}>
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

const TaskComponent = ({storyList, story, statusId}) => (
    <Card.Group>
        {story
            .taskList
            .list
            .filter((task) => task.status.id === statusId)
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
                        <div className='ui button'>
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
            {storyList
                .list
                .map((story) => (
                    <List.Item key={story.id}>
                        <List.Content>
                            <List.Header>StorySubject【{story.subject}】</List.Header>
                            <Grid columns={3} divided>
                                <Grid.Row>
                                    <Grid.Column>
                                        TODO
                                        <TaskComponent storyList={storyList} story={story} statusId='1'/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        DOING
                                        <TaskComponent storyList={storyList} story={story} statusId='2'/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        DONE
                                        <TaskComponent storyList={storyList} story={story} statusId='3'/>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </List.Content>
                    </List.Item>
                ))}
        </List>
    </Segment>
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