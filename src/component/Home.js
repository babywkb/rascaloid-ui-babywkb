import React from 'react'
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ProjectStore from '../store/ProjectStore'
import {fetchTitle} from '../actions'


export default class Home extends React.Component {
    static getStores() {
        return [ProjectStore];
    }
    
    static calculateState(prevState) {
        return {
            project: ProjectStore.getState()
        };
    }

    componentDidMount() {
        fetchTitle();
    }

    render() {
        return(
                <List divided relaxed>
                {this.state.project.map((pj) => (
                    <List.Item key={pj.id}>
                        <List.Icon name='tasks' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'><Link to={"/projects/" + pj.id}>{pj.name}</ Link></List.Header>
                            <List.Description as='a'>{pj.description}</List.Description>
                        </List.Content>
                    </List.Item>
                ))}
                </List> 
        );
    }

}