import React from 'react';
import s from './MyProjects.module.scss'
import Project from "./project/Project";
import todoImage from '../assets/image/Todo.png'
import socialImage from '../assets/image/SN.jpg'
import counterImage from '../assets/image/counter.jpg'

const MyProjects = () => {

  const social = {
    backgroundImage: `url(${socialImage})`
  }
  const todolist = {
    backgroundImage: `url(${todoImage})`
  }
  const counter = {
    backgroundImage: `url(${counterImage})`
  }

  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <h2 className={s.title}>My Projects</h2>
        <div className={s.projectsBlock}>
          <Project style={social} title={'Soscial network'}/>
          <Project style={todolist} title={'Todolist'}/>
          <Project style={counter} title={'Counter'}/>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;