import React from 'react';

const Button = (props) => {
  const { textBtn, btnClass } = props;
  return <div className={btnClass}>
          {textBtn}
        </div>;
};

export default Button;
