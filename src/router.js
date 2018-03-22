import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import HomeContainer from './container/HomeContainer';
import ProjectContainer from './container/ProjectContainer';
import IterationContainer from './container/IterationContainer';
import {fetchProjects} from './actions'

export default () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={HomeContainer} onEnter={fetchProjects} />
            <Route exact path="/projects/:projectId" component={ProjectContainer} />
            <Route exact path="/projects/:projectId/iterations/:iterationId" component={IterationContainer} />
        </div>
    </BrowserRouter>
);
