import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Refused from '../Refused/Refused';
import { checkAuth } from '../../actions/authActions'
import { useSelector, useDispatch } from "react-redux";

interface IToken {
  token: string;
}

interface IRootState {
  toggleModal: boolean;
  isAuthorized: boolean;
}

const Verification: React.FC = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(false);
  const history = useHistory();
  const toggleModal: any = useSelector<IRootState>(state => state.toggleModal);
  const isAuthorized: any = useSelector<IRootState>(state => state.isAuthorized) 
  const dispatch = useDispatch();
  const {token} = useParams<IToken>();

  const redirect = (isAuthorized: boolean) => {
    if (isAuthorized) return history.push("/salon");
  }

  useEffect(() => {
    dispatch(checkAuth(token))
  }, [token])

  useEffect(() => {
    setModal(toggleModal)
  }, [toggleModal])

  useEffect(() => {
    redirect(isAuthorized)
  }, [isAuthorized])

    return (
      <div>
          {!isAuthorized ? <h2>Acces to room was denied</h2> : <p>Checking token...</p>}
          <Refused modal={modal} toggle={toggle}/>
      </div>
    );
}

export default Verification;

