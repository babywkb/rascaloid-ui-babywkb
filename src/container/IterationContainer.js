import { Container } from 'flux/utils';

import Iteration from '../component/Iteration';
import StoryListStore from '../store/StoryListStore';

const getStores = () => [StoryListStore];

const calculateState = (prevState, { match: { params: { projectId, iterationId } } }) => {
    return {
        projectId,
        iterationId,
        storyList: StoryListStore.getState(),
    };
};

const IterationContainer = Container.createFunctional(Iteration, getStores, calculateState, { withProps: true });

export default IterationContainer;
