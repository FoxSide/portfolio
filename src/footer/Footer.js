import React from 'react';
import s from './Footer.module.scss'
import telegramImg from '../assets/image/telegram.png'
import githubImg from '../assets/image/github.png'
import linkedImg from '../assets/image/linkedIn.png'

const Footer = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <span className={s.title}>Contact me</span>
        <div className={s.contactContainer}>
          <a  href={'https://t.me/foxside'} target={'_blank'} rel="noreferrer">
            <img src={telegramImg} alt={'logo'} className={s.contactBody}/>
          </a>
          <a href={'https://github.com/FoxSide'} target={'_blank'} rel="noreferrer">
            <img src={githubImg} alt={'logo'} className={s.contactBody}/>
          </a>
          <a href={'https://www.linkedin.com/in/eduard-mysan/'} target={'_blank'} rel="noreferrer">
            <img src={linkedImg} alt={'logo'} className={s.contactBody}/>
          </a>
        </div>
        <span className={s.text}>© 2022 All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;