import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { icon, type, buttonText, classColor, classSize, children, onClick } =
    props;
  return (
    <button
      type={type}
      className={`${classColor} ${classSize}`}
      onClick={onClick}
    >
      {children}
      {buttonText}
      {icon}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  classColor: PropTypes.string.isRequired,
  classSize: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
};

export default Button;
