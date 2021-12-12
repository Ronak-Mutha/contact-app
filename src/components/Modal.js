import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

function ModalDelete({ trigger, deleteHandler, id }) {
  const [open, setOpen] = React.useState(false);
  const buttonStyle = {
    display: "inline-flex",
  };
  return (
    <Modal
      closeIcon
      open={open}
      trigger={trigger}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="trash" content="Delete Contact" />
      <Modal.Content>
        <p>Are you sure you want to delete this contact permanently?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="green"
          style={buttonStyle}
          onClick={() => {
            deleteHandler(id);
            setOpen(false);
          }}
        >
          <Icon name="checkmark" />
          <span>Yes</span>
        </Button>
        <Button
          color="red"
          style={buttonStyle}
          onClick={() => {
            setOpen(false);
          }}
        >
          <Icon name="remove" />
          <span>No</span>
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalDelete;
