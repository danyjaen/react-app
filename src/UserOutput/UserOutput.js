import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
      <div className="UserOutput">
        <p>This is an awesome person:</p>
        <p>{props.name}</p>
      </div>
  );
};

export default userOutput;
