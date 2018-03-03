import {ReduceStore} from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';
import ActionTypes from '../action-types';
import {Story, Task, TaskList} from '../models';

//そもそも要るの？？
class StoryStore extends ReduceStore {
    getInitialState() {
        //たぶんここもサーバサイドとやり取りしなきゃなと思う
        return Story.create('Storyタイトル１', TaskList.empty().add(Task.create('Taskタイトル１')).add(Task.create('Taskタイトル２')));
    }
    reduce(state, {type, payload}) {
        switch (type) {
            case ActionTypes.UPDATE_CONTENT:
                {
                    const {storyId, task, description} = payload;

                    console.log(description);
                    return description;
                }
            default:
                return state;
        }
    }
}

export default new StoryStore(RascaloidDispatcher);