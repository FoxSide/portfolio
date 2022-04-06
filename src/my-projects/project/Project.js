import React from 'react';
import s from './Project.module.scss'

const Project = (props) => {
  return (
    <div className={s.container}>
      <a href={props.ghPages} target="_blank" className={s.image} style={props.style} rel="noreferrer">
      </a>
      <div className={s.descriptionBlock}>
        <span className={s.titleProject}>{props.title}</span>
        <a href={props.ghRepository} target="_blank" rel="noreferrer">GitHub repository</a>
      </div>
    </div>
  );
};

export default Project;