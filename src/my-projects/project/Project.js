import React from 'react';
import s from './Project.module.scss'
const Project = (props) => {
  return (
    <div className={s.container}>
      <div className={s.image} style={props.style}>
        {/*<div className={s.showProject}>Смотреть</div>*/}
      </div>
      <div className={s.descriptionBlock}>
        <span className={s.titleProject}>{props.title}</span>
        {/*<span className={s.description}>{props.description}</span>*/}
      </div>
    </div>
  );
};

export default Project;