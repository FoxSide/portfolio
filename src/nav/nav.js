import React from 'react';
import s from './Nav.module.scss'

const Nav = () => {
  return (
    <div className={s.nav}>
      <span>Home</span>
      <span>Skills</span>
      <span>Projects</span>
      <span>Contacts</span>
    </div>
  );
};

export default Nav;