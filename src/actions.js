import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';
//import { storyStore } from './store/StoryStore';

export const updateContent = event => {
    const description = event.target.value;
    const story = event.target.story;
    console.log(description);
    RascaloidDispatcher.dispatch({
        type: ActionTypes.UPDATE_TASK_DESCRIPTION,
        payload: { description,story }
    });
};
