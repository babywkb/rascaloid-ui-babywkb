import React from 'react';
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import HeaderExamplePlugIcon from './HeaderExamplePlugIcon'
import 'semantic-ui-css/semantic.min.css'


const ActionShowIterates = ({ iteration,projectId }) => (
    <List divided relaxed>
        {iteration.map((itr) => (
            <List.Item key={itr.iterationId}>
                <List.Icon name='wait' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'><Link to={'/projects/' + projectId + '/iterations/' + itr.iterationId}>IterationNo.{itr.iterationId}</ Link></List.Header>
                    <List.Description as='a'>日付出したい</List.Description>
                </List.Content>
            </List.Item>
        ))}
    </List>
)

export default ({ projectId,iteration }) => (
    <div>
        <HeaderExamplePlugIcon />
        <ActionShowIterates iteration={iteration} projectId={projectId}/>
        <ul>
            <li>TODO イテレーションのデータを保持するStoreを作る</li>
            <li>TODO イテレーションの一覧を表示する</li>
            <li>TODO イテレーション詳細へリンクする</li>
        </ul>
    </div>
);