import React from 'react'
import {Button, Header, Modal, Form} from 'semantic-ui-react'

const TaskEditor = (task) => (
  <Modal trigger={< Button color='green'> 編集 </ Button>}>
    <Modal.Header>add Your Task</Modal.Header>
    <Modal.Content >
      <Modal.Description>
        <Header>タスク編集画面</Header>
        <p>このへんで編集できたらいいよね</p>
      </Modal.Description>
      <Form>
          <Form.Field>
            <label>タスク詳細</label>
            <input placeholder='First Name' value={task.description}
                onChange={updateContent} onKeyPress={tryAddTodo} />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
    </Modal.Content>
  </Modal>
)

export default TaskEditor