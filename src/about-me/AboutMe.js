import React from 'react';
import s from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <div className={s.text}>
          <span>Привет!</span>
          <h3>Меня зовут Эдуард</h3>
          <span>Я front-end разработчик</span>
        </div>
        <div className={s.photo}>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;