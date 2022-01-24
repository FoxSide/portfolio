import React from 'react';
import s from './Project.module.css'
const Project = (props) => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <div className={s.showProject}>Смотреть</div>
      </div>
      <div className={s.descriptionBlock}>
        <span className={s.titleProject}>{props.title}</span>
        <span className={s.description}>{props.description}</span>
      </div>
    </div>
  );
};

export default Project;