import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Refused from './Refused';
import { checkAuth } from '../actions/authActions'
import { useSelector, useDispatch } from "react-redux";

interface IToken {
  token: string;
}

interface IRootState {
  toggleModal: boolean;
}

const Verification: React.FC = () => {
 const [modal, setModal] = useState(false);
 const toggle = () => setModal(false);

 const toggleModal: any = useSelector<IRootState>(state => state.toggleModal) 
 const dispatch = useDispatch()

 const {token} = useParams<IToken>();

 useEffect(() => {
   dispatch(checkAuth(token))
 }, [token])

 useEffect(() => {
   console.log(toggleModal)
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

