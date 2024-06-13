import React from "react";

function ListItem(props) {
  return (
    <li>
      <div
        className={props.todo.isComplete ? "checked-todo" : ""}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <input
          id={props.todo.id}
          type="checkbox"
          checked={props.todo.isComplete}
          onChange={() => props.toggleCompleted(props.todo.id)}
        />
        <label htmlFor={props.todo.id}>{props.todo.title}</label>
      </div>
      <button
        onClick={() => {
          props.removeTask(props.todo.id);
        }}
      >
        Remove
      </button>
    </li>
  );
}

export default ListItem;
