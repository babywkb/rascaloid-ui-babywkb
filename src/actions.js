import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';
//import { storyStore } from './store/StoryStore';

export const updateContent = event => {
    const description = event.target.value;
    console.log(description);
    RascaloidDispatcher.dispatch({
        type: ActionTypes.UPDATE_TASK_DESCRIPTION,
        payload: { description }
    });
};
