import React from 'react';
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'
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
        );
    }

}



// const ActionShowIterates = ({ iteration,projectId }) => (
//     <List divided relaxed>
//         {iteration.map((itr) => (
//             <List.Item key={itr.iterationId}>
//                 <List.Icon name='wait' size='large' verticalAlign='middle' />
//                 <List.Content>
//                     <List.Header as='a'><Link to={'/projects/' + projectId + '/iterations/' + itr.iterationId}>IterationNo.{itr.iterationId}</ Link></List.Header>
//                     <List.Description as='a'>日付出したい</List.Description>
//                 </List.Content>
//             </List.Item>
//         ))}
//     </List>
// )

// export default ({ projectId,iteration }) => (
//     <div>
//         <Header />
//         <ActionShowIterates iteration={iteration} projectId={projectId}/>
//     </div>
// );