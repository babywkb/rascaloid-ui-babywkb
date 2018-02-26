import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

const ModalModal = () => (
  <Modal trigger={<Button>タスクを追加</Button>}>
    <Modal.Header>add Your Task</Modal.Header>
    <Modal.Content >
      <Modal.Description>
        <Header>タスク編集画面</Header>
        <p>このへんで編集できたらいいよね</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModal