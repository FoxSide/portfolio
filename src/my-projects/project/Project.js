import React from 'react';
import s from './Project.module.scss'
const Project = (props) => {
  return (
    <div className={s.container}>
      <a href={props.path} target="_blank" className={s.image} style={props.style} rel="noreferrer">
        {/*<div className={s.showProject}>Смотреть</div>*/}
      </a>
      <div className={s.descriptionBlock}>
        <span className={s.titleProject}>{props.title}</span>
        {/*<span className={s.description}>{props.description}</span>*/}
      </div>
    </div>
  );
};

export default Project;