// src/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span>{todo.text}</span>
      <div className="todo-actions">
        <button className="complete" onClick={() => toggleTodo(index)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
