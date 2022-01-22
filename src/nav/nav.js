import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
  return (
    <div className={s.nav}>
      <span>Главная</span>
      <span>Скилы</span>
      <span>Работы</span>
      <span>Контакты</span>
    </div>
  );
};

export default Nav;