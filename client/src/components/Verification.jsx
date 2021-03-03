import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Refused from './Refused';
import {checkAuth} from '../actions/authActions';
import { connect } from "react-redux";


function Verification(props) {
 const [modal, setModal] = useState(false);
 const toggle = () => setModal(false);

 const {token} = useParams();

 useEffect(() => {
  props.checkAuth(token)
 }, [token])

 useEffect(() => {
   setModal(props.auth.toggleModal)
 }, [props.auth.toggleModal])

  return (
    <div>
        Welcome to this room!
        <Refused modal={modal} toggle={toggle}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth 
})

export default connect(mapStateToProps, { checkAuth })(Verification);

