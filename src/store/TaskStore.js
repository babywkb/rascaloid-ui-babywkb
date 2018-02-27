import { ReduceStore } from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';

class TaskStore extends ReduceStore {
    getInitialState() {
        //たぶんここもサーバサイドとやり取りしなきゃなと思う
        return [{TaskId:1,title:'Taskタイトル１',description:'詳細１',condition:'todo'},
        {storyId:2,title:'Storyタイトル２',description:'詳細２',condition:'doing'}];
    }
    reduce(state, { type, payload }) {
        switch (type) {
            default:
                return state;
        }
    }
}

export default new TaskStore(RascaloidDispatcher);