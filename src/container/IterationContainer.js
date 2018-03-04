import { Container } from 'flux/utils';

import Iteration from '../component/Iteration';
import DummyStore from '../store/DummyStore';
import StoryStore from '../store/StoryStore';

const getStores = () => [DummyStore,StoryStore];

const calculateState = (prevState, { match: { params: { projectId, iterationId } } }) => {
    return {
        dummy: DummyStore.getState(),
        projectId,
        iterationId,
        story: StoryStore.getState(),
        
    };
};

const IterationContainer = Container.createFunctional(Iteration, getStores, calculateState, { withProps: true });

export default IterationContainer;
