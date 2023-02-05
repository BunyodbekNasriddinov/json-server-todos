import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { TokenContext } from "../../context/TokenContext";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const { token } = useContext(TokenContext);
  const inputRef = useRef();
  const checkRef = useRef();

  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((data) => {
        if (data.status === 200) {
          setTodos(data.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:8080/todos", {
        text: inputRef.current.value,
        isCompleted: false,
      })
      .then((data) => {
        if (data.status === 201) {
          getTodos();
        }
      })
      .catch((err) => console.log(err));

    inputRef.current.value = "";
  };

  const handleDelete = (evt) => {
    axios.delete(`http://localhost:8080/todos/${evt.target.dataset.todoId}`);
    getTodos();
  };

  const handleCheck = (evt) => {
    const id = evt.target.dataset.todoId;
    axios
      .put(`http://localhost:8080/todos/${id}`, {
        text: todos[id - 1].text,
        isCompleted: !todos[id - 1].isCompleted,
      })
      .then((data) => {
        if (data.status === 200) {
          getTodos();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (evt) => {
    const id = evt.target.dataset.todoId;
    const newTodo = prompt("Todo'ni tahrirlang! ", todos[id - 1].text);

    if (newTodo) {
      axios
        .put(`http://localhost:8080/todos/${id}`, {
          text: newTodo,
          isCompleted: todos[id - 1].isCompleted,
        })
        .then((data) => {
          if (data.status === 200) {
            getTodos();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return token ? (
    <div>
      <form className="w-50 mx-auto my-5" onSubmit={(evt) => handleSubmit(evt)}>
        <div className="input-group">
          <input
            className="form-control"
            ref={inputRef}
            type="text"
            placeholder="Todo..."
          />
          <button className="btn btn-primary">SEND</button>
        </div>
      </form>
      <h2 className="h2 text-center my-5">TODOS</h2>
      {todos.length ? (
        <ul className="list-group w-50 mx-auto">
          {todos.map((todo) => (
            <li
              className={`d-flex list-group-item ${
                todo.isCompleted ? "bg-success text-white" : ""
              }`}
              key={todo.id}
            >
              <input
                className="me-2 form-check-input"
                defaultChecked={todo.isCompleted}
                onChange={(evt) => handleCheck(evt)}
                ref={checkRef}
                type="checkbox"
                data-todo-id={todo.id}
              />
              <span
                className={`${
                  todo.isCompleted ? "text-decoration-line-through" : ""
                }`}
              >
                {todo.id}. {todo.text}
              </span>
              <button
                className="btn btn-warning ms-auto"
                data-todo-id={todo.id}
                onClick={(evt) => handleEdit(evt)}
              >
                EDIT
              </button>
              <button
                onClick={(evt) => handleDelete(evt)}
                className="btn btn-danger ms-3"
                data-todo-id={todo.id}
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="h2 text-center my-5 text-warning">
          TODOLAR MAVJUD EMAS!!!
        </h2>
      )}
    </div>
  ) : (
    <>
      <h2 className="h2 text-center my-5">TODOS</h2>
      {todos.length ? (
        <ul className="list-group w-50 mx-auto">
          {todos.map((todo) => (
            <li className="d-flex list-group-item" key={todo.id}>
              {todo.id}. {todo.text}
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="h2 text-center my-5 text-warning">
          TODOLAR MAVJUD EMAS!!!
        </h2>
      )}
    </>
  );
};
