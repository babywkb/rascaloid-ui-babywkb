import {ReduceStore} from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';
import ActionTypes from '../action-types';
import {Story, Task, TaskList, StoryList} from '../models';

class StoryListStore extends ReduceStore {
    getInitialState() {
        return StoryList.empty().add(
            Story.create(1,'ストーリーのサブジェクト初期値１',3, 
                TaskList.empty()
                .add(Task.create(1,'タスクのサブジェクト初期値１','タスク詳細',5, {"id": 1}))
                ));
    }
    reduce(state, {type, payload}) {
        switch (type) {
            case ActionTypes.SET_DESCRIPTION:{
                    const {story,task,taskDescription} = payload;
                    const storyId = story.storyId
                    const taskId = task.taskId 
                    const taskList = story.taskList.setTaskDescription(taskId ,taskDescription);
                    return state.setStoryTaskList(storyId,taskList);
            }
            case ActionTypes.FETCH_STORY_LIST: {
                const { storyList } = payload;
                return storyList;
            }
            default:
                return state;
        }
    }
}

export default new StoryListStore(RascaloidDispatcher);
