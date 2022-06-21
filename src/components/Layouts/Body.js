import React from 'react';
import ConfirmDialog from '../Todo/ConfirmDialog';
import ListTodo from '../Todo/ListTodo';

const Body = () => {

  return (
    <div className='main'>
      <div className='main-column'>
        <ListTodo title='To do' />
      </div>
      <div className='main-column'>
        <ListTodo title='Doing' />
      </div>
      <div className='main-column'>
        <ListTodo title='Done' />
      </div>
      <ConfirmDialog />
    </div>
  );
};

export default Body;
