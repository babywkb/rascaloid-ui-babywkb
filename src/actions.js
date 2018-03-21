import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';
import axiosBase from './axiosBase'
import { StoryList, Story } from './models';
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
    let stories = [];
    let tasks = [];
    let taskStatuses = [];
    
    //並列になっているものは順不同で処理される注意
    axios.all(
        //ストーリー一覧取得
        axiosBase.get('/project/' + id + '/stories') 
        .then(response => {
            stories = response.data;
        })
        //タスク一覧取得
        .then(stories => {
            stories.map(story =>
                axiosBase.get('/story/' + story.id)
                .then(response => {
                    tasks = response.data;
                })
            )
        }),
        //タスクステータス取得
        axiosBase.get('/taskStatus')
        .then(response => {
            taskStatuses = response.data;
        }) 
    )


    RascaloidDispatcher.dispatch({
        type: ActionTypes.FETCH_STORY_LIST,
        payload: {}
    });
};