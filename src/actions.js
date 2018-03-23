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
    axiosBase.get('/project/' + id + '/stories')
        .then(response => {
            return Promise.all(response.data.map(story => {
                return axiosBase.get('/story/' + story.id + '/tasks')
                .then(resp => {
                    const tasks = resp.data;
                    return {
                        story,
                        tasks
                    };
                });
            }))
        })
        .then(stories => {
            return stories.reduce((storyList, { story, tasks }) => {
                const taskList = tasks.reduce((taskList, task) => {
                    return taskList.add(Task.create(
                        task.id,
                        task.subject,
                        task.description,
                        task.estimatedHours,
                        task.statusName
                    ));
                }, TaskList.empty());

                return storyList.add(Story.create(
                    story.id,
                    story.subject,
                    story.point,
                    taskList
                ));        
            }, StoryList.empty())
        })
        .then(storyList =>  RascaloidDispatcher.dispatch({
            type: ActionTypes.FETCH_STORY_LIST,
            payload: {storyList}}));
}
