import { ReduceStore } from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';

//そもそも要るの？？
class StoryStore extends ReduceStore {
    getInitialState() {
        //たぶんここもサーバサイドとやり取りしなきゃなと思う
        return [{storyId:1,title:'Storyタイトル１',description:'詳細１',taskCondition:'todo',task:'タスク１',taskDescription:'タスク詳細１'},
        {storyId:2,title:'Storyタイトル２',description:'詳細２',taskCondition:'doing',task:'タスク',taskDescription:'タスク詳細２'}];
    }
    reduce(state, { type, payload }) {
        switch (type) {
            default:
                return state;
        }
    }
}

export default new StoryStore(RascaloidDispatcher);