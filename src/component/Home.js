import React from 'react';
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import HeaderExamplePlugIcon from './HeaderExamplePlugIcon'
import 'semantic-ui-css/semantic.min.css'


const ActionShowProjects = ({ project }) => (
    <List divided relaxed>
        {project.map((pj) => (
            <List.Item key={pj.pjId}>
                <List.Icon name='tasks' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'><Link to={"/projects/" + pj.pjId}>{pj.pjName}</ Link></List.Header>
                    <List.Description as='a'>Updated 10 mins ago</List.Description>
                </List.Content>
            </List.Item>
        ))}
    </List>
)

export default ({ project }) => (
    <div>
        <HeaderExamplePlugIcon />
        <ActionShowProjects project={project} />
        <ul>
            <li>TODO プロジェクトのデータを保持するStoreを作る</li>
            <li>TODO プロジェクトの一覧を表示する</li>
            <li>TODO プロジェクト詳細へリンクする</li>
        </ul>
    </div>
);