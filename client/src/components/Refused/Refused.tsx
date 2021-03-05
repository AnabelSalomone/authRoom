import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch } from "react-redux";
import { TOGGLE_MODAL } from '../../actions/types'
 
interface Props {
    modal: boolean,
    toggle: () =>  void;
}

export const Refused: React.FC<Props> = ({modal, toggle}) => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
  dispatch({type: TOGGLE_MODAL})
}

  return (
    <div className="App">
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={closeModalHandler}>Access Refused</ModalHeader>
        <ModalBody>
            You cannot access this room. Please, check the link. 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Refused;
