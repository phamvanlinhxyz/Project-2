import React from 'react';
import { useSelector } from 'react-redux';
import { FcTodoList } from 'react-icons/fc';
import { todoSelector } from '../../store/reducers/todoSlice';

const NavBar = () => {
  const { allTodo } = useSelector(todoSelector);

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <h3 className="td-d-flex-row">
          <FcTodoList className="td-mr-md" /> To Do App
        </h3>
      </div>
      <div className="nav-right">
        <div>Tổng số công việc: {allTodo.length}</div>
      </div>
    </div>
  );
};

export default NavBar;
