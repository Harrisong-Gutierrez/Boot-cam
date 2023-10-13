import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ required, classColorInput }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    console.log('Checkbox is now:', newCheckedState);
  };

  return (
    <input
      className={`form-check-input ${classColorInput}`}
      type="checkbox"
      required={required}
      id="flexCheckDisabled"
      checked={isChecked}
      onChange={handleCheckBoxChange}
    />
  );
};

CheckBox.propTypes = {
  classColorInput: PropTypes.string,
  required: PropTypes.string,
};

CheckBox.defaultProps = {
  required: '',
};

export default CheckBox;
