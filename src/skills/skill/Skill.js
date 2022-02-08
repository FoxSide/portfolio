import React from 'react';
import s from './Skill.module.scss';

const Skill = (props) => {
  return (
    <div className={s.skill}>
      <div className={s.skillLogo}>

      </div>
      <div className={s.content}>
        <h4 className={s.title}>{props.title}</h4>
        <span className={s.description}>{props.description}</span>
      </div>
    </div>
  );
};

export default Skill;