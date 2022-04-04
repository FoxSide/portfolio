import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <span className={s.text}>© 2022 All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;