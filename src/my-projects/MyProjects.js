import React from 'react';
import s from './MyProjects.module.css'
import Project from "./project/Project";

const MyProjects = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <h2 className={s.title}>My Projects</h2>
        <div className={s.projectsBlock}>
          <Project title={'Название проекта'} description={'Караткое описание'}/>
          <Project title={'Название проекта'} description={'Караткое описание'}/>
          <Project title={'Название проекта'} description={'Караткое описание'}/>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;