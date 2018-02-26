import { ReduceStore } from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';

//日付取ってみたかっただけ
let dateTimeStart = new Date(2017,1,15,22,30);
let dateTimeEnd = new Date(2018,9,15,22,30);

class IterationStore extends ReduceStore {
    getInitialState() {
        //たぶんここもサーバサイドとやり取りしなきゃなと思う
        return [{iterationId:1,iterationStartDate:dateTimeStart,iterationEndDate:dateTimeEnd},{iterationId:2,iterateStartDate:dateTimeStart,iterateEndDate:dateTimeEnd}];
    }
    reduce(state, { type, payload }) {
        switch (type) {
            default:
                return state;
        }
    }
}

export default new IterationStore(RascaloidDispatcher);