import React from 'react';

const validation = (props) => {
  let text = '';
  if (props.inputLength >= 5) {
    text = 'Text long enough';
  } else {
    text = 'Text too short';
  }
  return (
      <div>
        <p>{text}</p>
      </div>
  );
};
export default validation;
