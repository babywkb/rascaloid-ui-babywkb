import { ReduceStore } from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';

//そもそも要るの？？
class StoryStore extends ReduceStore {
    getInitialState() {
        //たぶんここもサーバサイドとやり取りしなきゃなと思う
        return [{storyId:1,title:'Storyタイトル１',description:'詳細１',task:[{taskId:1,condition:'todo',title:'タスク１',description:'タスク詳細１'}]},
        {storyId:2,title:'Storyタイトル２',task:[{taskId:2,condition:'doing',title:'タスク２',description:'タスク詳細２'}]}];
    }
    reduce(state, { type, payload }) {
        switch (type) {
            default:
                return state;
        }
    }
}

export default new StoryStore(RascaloidDispatcher);