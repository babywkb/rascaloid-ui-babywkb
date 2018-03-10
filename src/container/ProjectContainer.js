import { Container } from 'flux/utils';

import Project from '../component/Project';
import IterationStore from '../store/IterationStore';

const getStores = () => [IterationStore];

const calculateState = (prevState, { match: { params: { projectId } } }) => {
    return {
        projectId,
        iteration: IterationStore.getState()
    };
};

const ProjectContainer = Container.createFunctional(Project, getStores, calculateState, { withProps: true });

export default ProjectContainer;
