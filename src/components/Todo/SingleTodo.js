import React from "react";
import { FcRight, FcCheckmark, FcClock, FcEmptyTrash } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {
  updateTodo,
  selectTodo,
  setDeleteMode,
  setDialogMessage,
} from "../../store/reducers/todoSlice";
import Moment from "react-moment";
import Button from "../Base/Button";
import { toggleDialog } from "../../store/reducers/appSlice";
import { DeleteMode } from "../../config";

const SingleTodo = (props) => {
  // Dispatch
  const dispatch = useDispatch();

  // Update to do status
  const handleUpdateTodo = (todoId) => {
    dispatch(updateTodo(todoId));
  };

  // Delete todo
  const handleDeleteTodo = (todoId) => {
    dispatch(setDeleteMode(DeleteMode.ONE));
    dispatch(setDialogMessage("Bạn có thực sự muốn xóa công việc này không?"));
    dispatch(selectTodo(todoId));
    dispatch(toggleDialog());
  };

  return (
    <div className="single-todo">
      <div className="single-todo-left">
        <div>{props.sTodo.title}</div>
        <span className="td-date-time">
          <FcClock className="td-mr-md" />
          <Moment format="hh:mm - DD/MM/YYYY">{props.sTodo.updatedAt}</Moment>
        </span>
      </div>
      <div className="single-todo-right td-d-flex-row">
        {props.done ? (
          <div className="td-button td-btn-md td-btn-square td-btn-circle td-btn-second">
            <FcCheckmark />
          </div>
        ) : (
          <>
            <Button
              tdClass="td-mi-md"
              size="md"
              shape="square"
              content={<FcEmptyTrash />}
              onClick={handleDeleteTodo.bind(this, props.sTodo.id)}
            />
            <Button
              size="md"
              shape="square"
              content={<FcRight />}
              onClick={handleUpdateTodo.bind(this, props.sTodo.id)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SingleTodo;
