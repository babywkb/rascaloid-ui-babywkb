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

export const fetchStories = id => {
    let stories = [];
    
    axiosBase.get('/project/' + id + '/stories')
    .then(response => {
        stories = response.data
        RascaloidDispatcher.dispatch({
            type: ActionTypes.FETCH_STORIES,
            payload: {stories}
        });
    })
};