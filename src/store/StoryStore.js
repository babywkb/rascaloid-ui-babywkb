import {ReduceStore} from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';
import ActionTypes from '../action-types';
import {Story, Task, TaskList, StoryList} from '../models';

class StoryStore extends ReduceStore {
    getInitialState() {
        return StoryList.empty().add(
            Story.create('Storyタイトル１', '詳細初期値', 
                TaskList.empty()
                .add(Task.create('Taskタイトル１'))
                .add(Task.create('Taskタイトル２'))));
    }
    reduce(state, {type, payload}) {
        switch (type) {
            case ActionTypes.UPDATE_TASK_DESCRIPTION:
                {
                    const {description} = payload;
                    console.log(description);
                    return state.setDescription(description);
                }
            default:
                return state;
        }
    }
}

export default new StoryStore(RascaloidDispatcher);
