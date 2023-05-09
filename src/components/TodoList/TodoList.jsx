import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => {
  const todosCount = todos.length;
  const completedTodosCount = todos.reduce(
    (prev, { completed }) => (completed ? prev + 1 : prev),
    0
  );

  return (
    <>
      <p className="todoList__text">Total tasks: {todosCount}</p>
      <p className="todoList__text">Completed tasks: {completedTodosCount}</p>

      <ul className="todoList">
        {todos.map(({ id, text }) => (
          <li key={id} className="todoList__item">
            <p className="todoList__text">{text}</p>
            <button
              onClick={() => {
                onDeleteTodo(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
