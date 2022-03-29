import React from 'react';
import s from './Skill.module.scss';

const Skill = (props) => {
  return (
    <div className={s.skillContainer}>
      <div className={s.skill}>
        <img className={s.logo} src={props.img} alt="logo"/>
      </div>
      <span className={s.titleSkill}>{props.title}</span>
    </div>
  );
};

export default Skill;