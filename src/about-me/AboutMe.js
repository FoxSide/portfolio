import React from 'react';
import s from './AboutMe.module.css'

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
        </div>

        <div className={s.photo}>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;