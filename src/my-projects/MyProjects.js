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
    ghPages: {
      social: 'https://foxside.github.io/socialnetwork-ts',
      todolist: 'https://foxside.github.io/todoV2/',
      memCard: 'https://foxside.github.io/friday-project'
    },
    ghRepository: {
      social: 'https://github.com/FoxSide/socialnetwork-ts',
      todolist: 'https://github.com/FoxSide/todoV2',
      memCard: 'https://github.com/FoxSide/friday-project'
    }
  }

  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <h2 className={s.title}>My Projects</h2>
        <div className={s.projectsBlock}>
          <Zoom>
            <Project style={todolist} title={'Todolist'} ghPages={path.ghPages.todolist} ghRepository={path.ghRepository.todolist}/>
            <Project style={memCard} title={'Memorization Cards'} ghPages={path.ghPages.memCard} ghRepository={path.ghRepository.memCard}/>
            <Project style={social} title={'Soscial network'} ghPages={path.ghPages.social} ghRepository={path.ghRepository.social}/>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;