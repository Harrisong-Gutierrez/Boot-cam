'use client';

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../context/ThemeContext';
import { toast } from '../Alert';
import handleLogout from '../../services/user/logout';
import { LOGIN_ROUTE } from '../constants';

const Navbar = (props) => {
  const { textName, textLogOut } = props;
  const { isDarkMode } = useContext(ThemeContext);
  const darkModeClass = isDarkMode ? 'NavbarDark' : 'NavbarLight';

  const user = JSON.parse(localStorage.getItem('UserState'));

  const handleButtonlogout = async (event) => {
    event.preventDefault();
    try {
      const userData = JSON.parse(localStorage.getItem('UserState'));
      const { token } = userData;
      const { status } = await handleLogout(token);

      if (status === 200) {
        toast.success('Log-out successful! You can now edit your To Do List.');
        localStorage.removeItem('UserState');
        location.replace(LOGIN_ROUTE);
      }
    } catch (error) {
      toast.error(
        'There was an error trying to log out. Please try again later.',
      );
    }
  };

  return (
    <div className={`Navbar ${darkModeClass}`}>
      <span>{textName}</span>
      <span>{user.name}</span>
      <button
        type="submit"
        onClick={handleButtonlogout}
        className={`Navbar-button ${darkModeClass}`}
      >
        {textLogOut}
      </button>
    </div>
  );
};

Navbar.propTypes = {
  textName: PropTypes.string.isRequired,
  textLogOut: PropTypes.string.isRequired,
};

export default Navbar;
