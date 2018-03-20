import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';
import axiosBase from './axiosBase'

export const updateTaskDescription = (story,task,taskDescription) => {
    RascaloidDispatcher.dispatch({
        type: ActionTypes.SET_DESCRIPTION,
        payload: {story,task,taskDescription}
    });
};

export const fetchTitle = event => {
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