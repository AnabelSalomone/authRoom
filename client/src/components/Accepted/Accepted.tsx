import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';


interface IRootState {
  isAuthorized: boolean;
}

export const Accepted: React.FC = () => {
  const isAuthorized: any = useSelector<IRootState>(state => state.isAuthorized);
  const history = useHistory();

  const redirect = (isAuthorized: boolean) => {
    if (!isAuthorized) return history.push("/rejoindre-salon/refused");
  }

  useEffect(() => {
    redirect(isAuthorized);
  }, [isAuthorized])

  return (
    <div className="App">
        <h2>Welcome to this room</h2>
    </div>
  );
}

export default Accepted;
