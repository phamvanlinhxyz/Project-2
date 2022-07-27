import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleArea } from "../../store/reducers/appSlice";
import { addTodo } from "../../store/reducers/todoSlice";
import Button from "../Base/Button";

const AddTodo = () => {
  // Selector, dispatch
  const dispatch = useDispatch();

  // useState
  const [title, setTitle] = useState("");

  // Cancel add textarea
  const handleCancel = (event) => {
    event.preventDefault();
    dispatch(toggleArea(null));
    setTitle("");
  };

  // Add new todo
  const handleAdd = () => {
    if (title !== "") {
      dispatch(addTodo(title));
      setTitle("");
      dispatch(toggleArea(null));
    }
  };

  return (
    <>
      <div>
        <textarea
          className="td-textarea"
          placeholder="Enter your to do!"
          rows="3"
          onChange={(event) => setTitle(event.target.value)}
          value={title}></textarea>
        <div className="td-button-group td-d-flex-row td-justify-content-end">
          <Button
            tdClass="td-mi-md"
            size="md"
            color="prim"
            content="Add"
            onClick={handleAdd}
          />
          <Button size="md" content="Cancel" onClick={handleCancel} />
        </div>
      </div>
    </>
  );
};

export default AddTodo;
