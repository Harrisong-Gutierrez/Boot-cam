'use client';

import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { ThemeContext } from '../../context/ThemeContext';

const BoxHeader = (props) => {
  const { headerText, taskCount } = props;
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [checked, setChecked] = useState(isDarkMode);
  const darkClassBoxHeader = isDarkMode ? 'BoxHeaderDark' : 'BoxHeaderLight';

  const handleSwitch = (nextChecked) => {
    toggleDarkMode();
    setChecked(nextChecked);
  };

  return (
    <div className={`BoxHeader ${darkClassBoxHeader}`}>
      <h1 className="BoxHeader-title">
        {headerText} ({taskCount})
      </h1>
      <div className="BoxHeader-switch">
        <Switch onChange={handleSwitch} checked={checked} />
      </div>
    </div>
  );
};

BoxHeader.propTypes = {
  taskCount: PropTypes.number.isRequired,
};

export default BoxHeader;
