import React from 'react';
import s from './AboutMe.module.scss'
import photoMe from '../assets/image/photoMe.jpg'
import telegramImg from '../assets/image/telegram.png'
import instImg from '../assets/image/instagram.png'
import linkedImg from '../assets/image/linkedIn.png'

const AboutMe = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <div className={s.text}>
          <span className={s.subtitle}>Welcome to my world</span>
          <h1 className={s.title}>Hi, I'm <span className={s.name}>Eduard Mysan</span><br/>a Front-end Developer</h1>
          <div>
            <p className={s.description}>I am using React to write a SPA. There is not much experience yet, but I strive to learn all the intricacies of programming to increase my result</p>
          </div>
          <div className={s.findContainer}>
            <span className={s.contacText}>contact with me</span>
            <div className={s.contactsGroup}>
              <div className={s.contactContainer}>
                <img src={telegramImg} alt="img"/>
              </div>
              <div className={s.contactContainer}>
                <img src={instImg} alt="img"/>
              </div>
              <div className={s.contactContainer}>
                <img src={linkedImg} alt="img"/>
              </div>
            </div>
          </div>
        </div>
          <img className={s.photoMe} src={photoMe} alt="photoMe"/>
      </div>
    </div>
  );
};

export default AboutMe;