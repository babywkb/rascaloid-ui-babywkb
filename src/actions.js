import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';
import axiosBase from './axiosBase'

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
    
    axiosBase.get('/project/1/stories')
    .then(response => {
        iterations = response.data
        RascaloidDispatcher.dispatch({
            type: ActionTypes.FETCH_ITERATIONS,
            payload: {iterations}
        });
    })
};

