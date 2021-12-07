import React from 'react'

const TodoItem = ({id, text, complited ,removeTodo, toggleTodoComplete,}) => {
    return (
        <li>
            <input
              type="checkbox"
              checked={complited}
              onChange={() => toggleTodoComplete(id)}
            />
            <span>{text}</span>
            <span
              className="delete"
              onClick={() => removeTodo(id)}
              style={{ color: "red" }}
            >
              &times;
            </span>
        </li>
    )
}

export default TodoItem
