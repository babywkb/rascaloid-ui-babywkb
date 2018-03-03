import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';
//import { storyStore } from './store/StoryStore';

export const updateContent = event => {
    const description = event.target.value;
    RascaloidDispatcher.dispatch({
        type: ActionTypes.UPDATE_CONTENT,
        payload: { description }
    });
};
