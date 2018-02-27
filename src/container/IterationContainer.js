import { Container } from 'flux/utils';

import Iteration from '../component/Iteration';
import DummyStore from '../store/DummyStore';
import StoryStore from '../store/StoryStore';
import TaskStore from '../store/TaskStore';

const getStores = () => [DummyStore];

const calculateState = (prevState, { match: { params: { projectId, iterationId } } }) => {
    return {
        dummy: DummyStore.getState(),
        projectId,
        story: StoryStore.getState(),
        iterationId,
        task: TaskStore.getState()
    };
};

const IterationContainer = Container.createFunctional(Iteration, getStores, calculateState, { withProps: true });

export default IterationContainer;
