import React from 'react';
import s from './MyProjects.module.scss'
import Project from "./project/Project";
import todoImage from '../assets/image/Todo.png'
import socialImage from '../assets/image/SN.jpg'
import memorizationCards from '../assets/image/MemorizationCards.jpg'
import {Zoom} from "react-awesome-reveal";

const MyProjects = () => {

  const social = {
    backgroundImage: `url(${socialImage})`
  }
  const todolist = {
    backgroundImage: `url(${todoImage})`
  }
  const memCard = {
    backgroundImage: `url(${memorizationCards})`
  }

  const path = {
    social: '',
    todolist: 'https://foxside.github.io/todoV2/',
    memCard: 'https://foxside.github.io/friday-project'

  }

  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <h2 className={s.title}>My Projects</h2>
        <div className={s.projectsBlock}>
          <Zoom>
            <Project style={social} title={'Soscial network'}/>
            <Project style={todolist} title={'Todolist'} path={path.todolist}/>
            <Project style={memCard} title={'Memorization Cards'} path={path.memCard}/>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;