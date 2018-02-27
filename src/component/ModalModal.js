import React from 'react'
import {Button, Header, Modal, Form} from 'semantic-ui-react'

const ModalModal = () => (
  <Modal trigger={< Button color='green'> 編集 </ Button>}>
    <Modal.Header>add Your Task</Modal.Header>
    <Modal.Content >
      <Modal.Description>
        <Header>タスク編集画面</Header>
        <p>このへんで編集できたらいいよね</p>
      </Modal.Description>
      <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name'/>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name'/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
    </Modal.Content>
  </Modal>
)

export default ModalModal