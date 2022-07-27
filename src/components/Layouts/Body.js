import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteMode } from "../../config";
import { appSelector, toggleDialog } from "../../store/reducers/appSlice";
import {
  setDeleteMode,
  setDialogMessage,
  todoSelector,
} from "../../store/reducers/todoSlice";
import Button from "../Base/Button";
import ConfirmDialog from "../Todo/ConfirmDialog";
import ListTodo from "../Todo/ListTodo";

const Body = () => {
  const { isShowDialog } = useSelector(appSelector);
  const { allTodo } = useSelector(todoSelector);

  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    if (allTodo.length > 0) {
      dispatch(setDeleteMode(DeleteMode.ALL));
      dispatch(
        setDialogMessage("Bạn có thực sự muốn xóa tất cả công việc không?")
      );
    } else {
      dispatch(setDialogMessage("Chưa có công việc nào!"));
    }
    dispatch(toggleDialog());
  };

  return (
    <div className="main">
      <div className="delete-all">
        <Button
          content="Xóa tất cả"
          size="lg"
          color="danger"
          onClick={handleDeleteAll}
        />
      </div>
      <div className="main-list">
        <div className="main-column">
          <ListTodo title="Cần làm" />
        </div>
        <div className="main-column">
          <ListTodo title="Đang làm" />
        </div>
        <div className="main-column">
          <ListTodo title="Hoàn thành" />
        </div>
      </div>
      {isShowDialog && <ConfirmDialog />}
    </div>
  );
};

export default Body;
