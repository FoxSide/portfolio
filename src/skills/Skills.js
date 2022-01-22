import React from 'react';
import s from './Skills.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
          <h2 className={s.title}>Skills</h2>
        <div className={s.skillsBlock}>
          <Skill title={'JS'}
                 description={'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.'}/>
          <Skill title={'CSS'}
                 description={'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.'}/>
          <Skill title={'React'}
                 description={'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.'}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;