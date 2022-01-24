import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <span className={s.title}>Иван Иванов</span>
        <div className={s.imageBlock}>
          <div className={s.image}></div>
          <div className={s.image}></div>
          <div className={s.image}></div>
          <div className={s.image}></div>
        </div>
        <span className={s.text}>2022 Все права защищены</span>
      </div>
    </div>
  );
};

export default Footer;