import { Container } from 'flux/utils';

import Home from '../component/Home';
import DummyStore from '../store/DummyStore';
import ProjectStore from '../store/ProjectStore';

const getStores = () => [DummyStore,ProjectStore];

const calculateState = () => {
    return {
        dummy: DummyStore.getState(),
        project: ProjectStore.getState()
    };
};

const HomeContainer = Container.createFunctional(Home, getStores, calculateState);

export default HomeContainer;
