import { ReduceStore } from 'flux/utils';

import RascaloidDispatcher from '../dispatcher';

class DummyStore extends ReduceStore {
    getInitialState() {
        return 'dummy';
    }
    reduce(state, { type, payload }) {
        switch (type) {
            default:
                return state;
        }
    }
}

export default new DummyStore(RascaloidDispatcher);
