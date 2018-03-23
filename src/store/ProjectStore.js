import { ReduceStore } from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';
import ActionTypes from '../action-types';

class ProjectStore extends ReduceStore {
    getInitialState() {
        return [{pjId:1,pjName:'初期値'}];
    }

    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.FETCH_TITLE: {
                const { projects } = payload;
                return projects;
            }
            default:
                return state;
        }
    }
}

export default new ProjectStore(RascaloidDispatcher);