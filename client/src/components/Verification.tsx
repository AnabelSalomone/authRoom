import React, { useState, useEffect, SetStateAction } from 'react';
import {useParams} from 'react-router-dom';
import Refused from './Refused';
import { useSelector, useDispatch } from "react-redux";

interface IToken {
  token: string;
}

interface IModal {
  modal: boolean;
}

interface IRootState {
  state: object;
  toggleModal: boolean;
}

const Verification: React.FC = () => {
 const [modal, setModal] = useState<IModal>({modal: false});
 const toggle = () => setModal({modal: false});

 const toggleModal = useSelector<IRootState>(state => state.toggleModal)
 const dispatch = useDispatch()

 const {token} = useParams<IToken>();

 useEffect(() => {
  //props.checkAuth(token)
  //dispatch({type: })
 }, [token])

 useEffect(() => {
   setModal(toggleModal)
 }, [toggleModal])

  return (
    <div>
        Welcome to this room!
        <Refused modal={modal} toggle={toggle}/>
    </div>
  );
}

export default Verification;

