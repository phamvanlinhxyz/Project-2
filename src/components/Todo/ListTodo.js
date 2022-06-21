import React from 'react';
import { FcAddDatabase } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { toggleArea } from '../../store/reducers/appSlice';
import { todoSelector } from '../../store/reducers/todoSlice';
import Button from '../Base/Button';
import AddTodo from './AddTodo';
import SingleTodo from './SingleTodo';

const ListTodo = (props) => {
  // Load todo
  var todo = useSelector(todoSelector);
  todo = todo.filter((td) => {
    return td.status === props.title;
  });

  // Dispatch
  const dispatch = useDispatch();

  // Open add textarea
  const openAddArea = () => {
    dispatch(toggleArea(null));
  };

  return (
    <>
      <div className='list-todo'>
        <div className='list-todo-header'>
          <h3>
            {props.title}: {todo.length}
          </h3>
          {props.title === 'To do' ? (
            <Button
              size='lg'
              shape='square'
              content={<FcAddDatabase />}
              onClick={openAddArea}
            />
          ) : (
            <></>
          )}
        </div>
        {props.title === 'To do' ? <AddTodo /> : ''}
        <div className='list-todo-body'>
          {todo.map((td) => {
            return (
              <SingleTodo
                key={td.id}
                sTodo={td}
                done={td.status === 'Done' ? true : false}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListTodo;
