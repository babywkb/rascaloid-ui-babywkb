import React from 'react';
import { Link } from 'react-router-dom'
import { List, Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import IterationStore from '../store/IterationStore';
import {fetchIterations} from '../actions'


export default class Home extends React.Component {
    static getStores() {
        return [IterationStore];
    }
    
    static calculateState = (prevState, { match: { params: { projectId } } }) => {
        return {
            projectId,
            iteration: IterationStore.getState()
        };
    };

    componentDidMount() {
        fetchIterations(this.state.projectId);
    }

    render() {
        return(
            <Container className="rascaloid-container">
                <Header as="h1" content={`Project: ${this.state.projectId}, Iterations`} />
                <List divided relaxed>
                {this.state.iteration.map((itr) => (
                    <List.Item key={itr.id}>
                        <List.Icon name='wait' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'><Link to={'/projects/' + this.state.projectId + '/iterations/' + itr.id}>{itr.id}{itr.subject}</ Link></List.Header>
                            <List.Description as='a'>{itr.description}</List.Description>
                            <List.Description as='a'>{itr.startOn}～{itr.endOn}</List.Description>
                        </List.Content>
                    </List.Item>
                ))}
                </List>  
            </Container>
        );
    }

}