import {ReduceStore} from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';
import ActionTypes from '../action-types';
import {Story, Task, TaskList, StoryList} from '../models';

class StoryListStore extends ReduceStore {
    getInitialState() {
        return StoryList.empty().add(
            Story.create('ストーリーのタイトル', 
                TaskList.empty()
                .add(Task.create('タスクのタイトル１','タスク詳細'))
                .add(Task.create('タスクのタイトル２','タスク詳細'))));
    }
    reduce(state, {type, payload}) {
        switch (type) {
            case ActionTypes.SET_DESCRIPTION:
                {
                    const {story,task,taskDescription} = payload;
                    const taskList = story.taskList.setTaskDescription(task.taskId ,taskDescription);
                    return state.setStoryTaskList(story.storyId,taskList);
                }
            default:
                return state;
        }
    }
}

export default new StoryListStore(RascaloidDispatcher);
