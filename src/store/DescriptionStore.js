import {ReduceStore} from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';
import ActionTypes from '../action-types';

class DescriptionStore extends ReduceStore {
    getInitialState() {
        return '';
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.UPDATE_DESCRIPTION: {
                const { taskDescription } = payload;
                return taskDescription;
            }
            case ActionTypes.SET_DESCRIPTION: {
                return '';
            }
            default:
                return state;
        }
    }
}

export default new DescriptionStore(RascaloidDispatcher);