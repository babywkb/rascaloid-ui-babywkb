import {ReduceStore} from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';
import ActionTypes from '../action-types';
import {Story, Task, TaskList, StoryList} from '../models';

class StoryListStore extends ReduceStore {
    getInitialState() {
        return [{subject: "Story1",description: "Implements story1",point: 5}]
    }
    reduce(state, {type, payload}) {
        switch (type) {
            case ActionTypes.SET_DESCRIPTION:
                {
                    const {story,task,taskDescription} = payload;
                    const storyId = story.storyId
                    const taskId = task.taskId 
                    const taskList = story.taskList.setTaskDescription(taskId ,taskDescription);
                    return state.setStoryTaskList(storyId,taskList);
                }
            default:
                return state;
        }
    }
}

export default new StoryListStore(RascaloidDispatcher);
