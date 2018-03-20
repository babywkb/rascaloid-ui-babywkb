import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';

export const updateTaskDescription = (story,task,taskDescription) => {
    RascaloidDispatcher.dispatch({
        type: ActionTypes.SET_DESCRIPTION,
        payload: {story,task,taskDescription}
    });
};

export const fetchTitle = event => {
    let projects = [{pjId:1,pjName:'できてるよーん'}];
    const axiosBase = require('axios');
    const axios = axiosBase.create({
        baseURL: 'http://localhost:3000', // バックエンドB のURL:port を指定する
        headers: {
          'ContentType': 'application/json',
          'X-Bouncr-Credential': 'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyMSIsIm5hbWUiOiJUZXN0IHVzZXIxIiwicGVybWlzc2lvbnMiOlsicHJvamVjdDpyZWFkIiwicHJvamVjdDpjcmVhdGUiLCJwcm9qZWN0OnVwZGF0ZSIsInByb2plY3Q6ZGVsZXRlIl19.lfegO1IXi1hlBETymqw8nqRaq7POrnriJU_5YK2R-PI'
        },
        responseType: 'json'  
    });

    axios.get('/projects')
    .then(response => (
        projects = response.data
    ))
    
    RascaloidDispatcher.dispatch({
        type: ActionTypes.FETCH_TITLE,
        payload: projects
    });
};