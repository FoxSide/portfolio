import React from 'react';
import s from './Skills.module.scss'
import Skill from "./skill/Skill";
import jsImg from '../assets/image/java-script.png'
import tsImg from '../assets/image/typescript.png'
import htmlImg from '../assets/image/html.png'
import sassImg from '../assets/image/sass.png'
import reactImg from '../assets/image/science.png'
import reduxtImg from '../assets/image/pngegg.png'
import gitImg from '../assets/image/git.png'
import muiImg from '../assets/image/mui.png'

const Skills = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <div>
          <h2 className={s.title}>My Skills</h2>
        </div>
        <div className={s.skillsBlock}>
          <Skill title={'JavaScript'} img={jsImg}/>
          <Skill title={'TypeScript'} img={tsImg}/>
          <Skill title={'HTML'} img={htmlImg}/>
          <Skill title={'CSS / SCSS'} img={sassImg}/>
          <Skill title={'React'} img={reactImg}/>
          <Skill title={'Redux'} img={reduxtImg}/>
          <Skill title={'Git'} img={gitImg}/>
          <Skill title={'Material-UI'} img={muiImg}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;