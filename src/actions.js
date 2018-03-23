import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';
import axiosBase from './axiosBase'
import {StoryList, Story, TaskList, Task} from './models';

export const updateTaskDescription = (story, task, taskDescription) => {
    RascaloidDispatcher.dispatch({
        type: ActionTypes.SET_DESCRIPTION,
        payload: {
            story,
            task,
            taskDescription
        }
    });
};

export const fetchProjects = event => {
    let projects = [];

    axiosBase.get('/projects')
    .then(response => {
        projects = response.data
        RascaloidDispatcher.dispatch({
            type: ActionTypes.FETCH_TITLE,
            payload: {projects}
        });
    })
};

export const fetchIterations = id => {
    let iterations = [];

    axiosBase.get('/project/' + id + '/iterations')
    .then(response => {
        iterations = response.data
        RascaloidDispatcher.dispatch({
            type: ActionTypes.FETCH_ITERATIONS,
            payload: {iterations}
        });
    })
};

export const fetchStoryList = id => {
    let storyList = StoryList.empty();
    let taskList = TaskList.empty();

    
    axiosBase.get('/project/' + id + '/stories')
        .then(response => {
            response.data.forEach(story => {
                storyList = storyList.add(
                    Story.create(
                        story.id,
                        story.subject,
                        story.point,
                        taskList
                    )
                )
            })
        })
        .then(() => {storyList.list.forEach(story => {
            axiosBase.get('/story/' + story.id + '/tasks')
            .then(resp => {
                resp.data.forEach(task => (
                taskList = taskList.add(Task.create(
                    task.id,
                    task.subject,
                    task.description,
                    task.estimatedHours,
                    task.status
                    ))
                ))           
            })
        })})
        .then(() => {storyList.list.map(story => (story.setTaskList(taskList)))})
        .then(() => {RascaloidDispatcher.dispatch({
                type: ActionTypes.FETCH_STORY_LIST,
                payload: {storyList}
            })}
        )
}
