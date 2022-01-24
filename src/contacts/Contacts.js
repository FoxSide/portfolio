import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <h2 className={s.title}>Контакты</h2>
        <form className={s.contactsBlock}>
          <input className={s.input} type="text"/>
          <input className={s.input} type="text"/>
          <textarea className={s.text}/>
        </form>
        <span className={s.button}>Отправить</span>
      </div>
    </div>
  );
};

export default Contacts;