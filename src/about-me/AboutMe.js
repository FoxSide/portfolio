import React from 'react';
import s from './AboutMe.module.scss'
import photoMe from '../assets/image/photoMe.jpg'
import telegramImg from '../assets/image/telegram.png'
import githubImg from '../assets/image/github.png'
import linkedImg from '../assets/image/linkedIn.png'

const aboutMeText = 'I am a person who has a strong passion for programming. I have experience building a SPA with React/Redux/TypeScript. In my free time, I expand my knowledge in the field of front-end development, devote time to Codewars, and also improve my knowledge of the English language.'

const AboutMe = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <div className={s.text}>
          <span className={s.subtitle}>Welcome to my world</span>
          <h1 className={s.title}>Hi, I'm <span className={s.name}>Eduard Mysan</span>
            <br/>a Front-end Developer
          </h1>
          <div>
            <p className={s.description}>{aboutMeText}</p>
          </div>
          <div className={s.findContainer}>
            <span className={s.contacText}>contact with me</span>
            <div className={s.contactsGroup}>
              <a href={'https://t.me/foxside'} target="_blank" className={s.contactContainer} rel="noreferrer">
                <img src={telegramImg} alt="img"/>
              </a>
              <a href={'https://github.com/FoxSide'} target="_blank" className={s.contactContainer} rel="noreferrer">
                <img src={githubImg} alt="img"/>
              </a>
              <a href={'https://www.linkedin.com/in/eduard-mysan/'} target="_blank" className={s.contactContainer} rel="noreferrer">
                <img src={linkedImg} alt="img"/>
              </a>
            </div>
          </div>
        </div>
        <img className={s.photoMe} src={photoMe} alt="photoMe"/>
      </div>
    </div>
  );
};

export default AboutMe;