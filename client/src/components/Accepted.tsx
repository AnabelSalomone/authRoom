import React from 'react';
import './App.css';

interface Props {
    name: string
}

export const Accepted: React.FC<Props> = ({name}) => {
  return (
    <div className="App">
        Welcome to this room, {name}
    </div>
  );
}

export default Accepted;
