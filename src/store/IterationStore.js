import { ReduceStore } from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';
import ActionTypes from '../action-types';

class IterationStore extends ReduceStore {
    getInitialState() {
        return [{id: 1,subject: "初期値",description: "説明初期値",startOn: "開始日初期値",endOn: "終了日初期値"}];
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.FETCH_ITERATIONS: {
                const { iterations } = payload;
                return iterations;
            }
            default:
                return state;
        }
    }
}

export default new IterationStore(RascaloidDispatcher);