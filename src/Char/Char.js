import React from 'react';

const char = (props) => {
  return (
      <div onClick={props.click}>
        <br/>
        <p>{props.char}</p>
      </div>
  );
};

export default char;
