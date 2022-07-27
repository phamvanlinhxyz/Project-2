import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Body from "./components/Layouts/Body";
import NavBar from "./components/Layouts/NavBar";
import { loadTodo, todoSelector } from "./store/reducers/todoSlice";

function App() {
  const { allTodo } = useSelector(todoSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("allTodo", JSON.stringify(allTodo));
    });
  }, [allTodo]);

  useEffect(() => {
    const allTodo = JSON.parse(localStorage.getItem("allTodo"));
    dispatch(loadTodo(allTodo));
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Body />
    </div>
  );
}

export default App;
