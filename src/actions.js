import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';
import axiosBase from './axiosBase'
import { StoryList, Story, TaskList, Task } from './models';
import axios from 'axios';

export const updateTaskDescription = (story,task,taskDescription) => {
    RascaloidDispatcher.dispatch({
        type: ActionTypes.SET_DESCRIPTION,
        payload: {story,task,taskDescription}
    });
};

export const fetchProjects = event => {
    let projects = [{pjId:1,pjName:'didMount通ったよ'}];

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
    let iterations = [{id: 1,subject: "hoge",description: "hoge",startOn: "hoge",endOn: "hoge"}];
    
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
    let taskStatuses = [];
    
    //Be carefull this scope is Parallel processing
    axios.all(
        //makeStoryList
        axiosBase.get('/project/' + id + '/stories') 
        .then(response => {
            response.data.map(story => {
                storyList.add(
                    Story.create(
                        story.id,
                        story.subject,
                        story.point,
                        TaskList.empty())
                )
            })
            
        })
        //make TaskList
        .then(storyList => {
            storyList.map(story =>
                axiosBase.get('/story/' + story.id + '/tasks')
                .then(response => {
                    response.data.map(task => {
                        taskList.add(
                            Task.create(
                                task.id,
                                task.subject,
                                task.description,
                                task.estimatedHours,
                                task.status
                            )
                        )
                    })
                })
            )
        }),
        //get taskStatuses(but nver used still now...)
        axiosBase.get('/taskStatus')
        .then(response => {
            taskStatuses = response.data;
        }) 
    )

    RascaloidDispatcher.dispatch({
        type: ActionTypes.FETCH_STORY_LIST,
        payload: { storyList }
    });
};