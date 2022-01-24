import React from 'react';
import s from './FindWork.module.css'

const FindWork = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <span className={s.title}>Рассматриваю варианты удаленной работы</span>
        <span className={s.button}>Нанять меня</span>
      </div>
    </div>
  );
};

export default FindWork;