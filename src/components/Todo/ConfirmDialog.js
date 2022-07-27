import React from "react";
import { FcQuestions, FcInfo } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { DeleteMode } from "../../config";
import { toggleDialog } from "../../store/reducers/appSlice";
import {
  deleteAll,
  deleteTodo,
  todoSelector,
} from "../../store/reducers/todoSlice";
import Button from "../Base/Button";

const ConfirmDialog = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Selector
  const { allTodo, deleteMode, dialogMsg } = useSelector(todoSelector);

  // Handle delete todo
  const confirmDelete = () => {
    switch (deleteMode) {
      case DeleteMode.ONE:
        dispatch(deleteTodo(null));
        break;
      case DeleteMode.ALL:
        dispatch(deleteAll());
        break;
      default:
        break;
    }

    dispatch(toggleDialog(null));
  };

  return (
    <div>
      <div className="td-cofirm-dialog">
        <div className="td-dialog-bg"></div>
        <div className="td-dialog-content">
          <div className="td-dialog-content-text">
            <div className="td-text-icon">
              {allTodo.length > 0 ? <FcQuestions /> : <FcInfo />}
            </div>
            <div className="td-text-content">{dialogMsg}</div>
          </div>
          <div
            style={{ "border-top": "1px solid #959595", margin: "16px 0" }}
          ></div>
          <div className="td-dialog-content-btn">
            {allTodo.length > 0 && (
              <Button
                size="md"
                content="Xóa"
                color="danger"
                onClick={confirmDelete}
              />
            )}
            <Button
              size="md"
              content="Đóng"
              onClick={() => dispatch(toggleDialog(null))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
