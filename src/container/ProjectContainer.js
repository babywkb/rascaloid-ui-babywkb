import { Container } from 'flux/utils';

import Project from '../component/Project';
import DummyStore from '../store/DummyStore';
import IterationStore from '../store/IterationStore';

const getStores = () => [DummyStore,IterationStore];

const calculateState = (prevState, { match: { params: { projectId } } }) => {
    return {
        dummy: DummyStore.getState(),
        projectId,
        iteration: IterationStore.getState()
    };
};

const ProjectContainer = Container.createFunctional(Project, getStores, calculateState, { withProps: true });

export default ProjectContainer;
