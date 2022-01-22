import React from 'react';
import s from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <div className={s.text}>
          <div>Привет!</div>
          <h2>Меня зовут Эдуард</h2>
          <div>Я front-end разработчик</div>
        </div>
        <div className={s.photo}>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;