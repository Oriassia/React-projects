import React from "react";

function ListItem(props) {
  return (
    <li key={props.todo.id}>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <input
          type="checkbox"
          checked={props.todo.isComplete}
          onChange={() => props.toggleCompleted(props.todo.id)}
        />
        {props.todo.title}
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
