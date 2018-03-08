import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';
import { storyListStore } from './store/StoryListStore';

export const updateTaskDescription = (story,task,taskDescription) => {
    RascaloidDispatcher.dispatch({
        type: ActionTypes.SET_DESCRIPTION,
        payload: {story,task,taskDescription}
    });
};
