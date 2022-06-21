import React from 'react';
import { FcQuestions } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { dialogSelector, toggleDialog } from '../../store/reducers/appSlice';
import { deleteTodo } from '../../store/reducers/todoSlice';
import Button from '../Base/Button';

const ConfirmDialog = () => {
  const toggle = useSelector(dialogSelector);
  const dispatch = useDispatch();

  const confirmDelete = () => {
    dispatch(deleteTodo(null));
    dispatch(toggleDialog(null));
  };

  return (
    <div className={toggle ? '' : 'td-d-none'}>
      <div className='td-cofirm-dialog'>
        <div className='td-dialog-bg'></div>
        <div className='td-dialog-content'>
          <div className='td-dialog-content-text'>
            <div className='td-text-icon'>
              <FcQuestions />
            </div>
            <div className='td-text-content'>
              Bạn có thực sự muốn xóa công việc này không?
            </div>
          </div>
          <div
            style={{ 'border-top': '1px solid #959595', margin: '16px 0' }}
          ></div>
          <div className='td-dialog-content-btn'>
            <Button
              size='md'
              content='Đóng'
              onClick={() => dispatch(toggleDialog(null))}
            />
            <Button
              size='md'
              content='Xóa'
              color='danger'
              onClick={confirmDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
