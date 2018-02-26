import { ReduceStore } from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';

class StoryStore extends ReduceStore {
    getInitialState() {
        //たぶんここもサーバサイドとやり取りしなきゃなと思う
        return [{storyId:1,title:'例のアレをアレする',description:'あれをこうしてこういうかんじであれする'},{storyId:1,title:'コレをいい感じにする',description:'もうなんか全体てきにいい感じにする'}];
    }
    reduce(state, { type, payload }) {
        switch (type) {
            default:
                return state;
        }
    }
}

export default new StoryStore(RascaloidDispatcher);