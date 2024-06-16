import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import { width } from "@mui/system";

function ListItem(props) {
  return (
    <li>
      <div
        className={`todo-details ${
          props.todo.isComplete ? "checked-todo" : ""
        }`}
      >
        <Checkbox
          id={props.todo.id.toString()}
          checked={props.todo.isComplete}
          onChange={() => props.toggleCompleted(props.todo.id)}
        />
        <label style={{}} htmlFor={props.todo.id.toString()}>
          {props.todo.title}
        </label>
      </div>
      <DeleteIcon
        className="trash-icon"
        fontSize="small"
        onClick={() => props.removeTask(props.todo.id)}
      />
    </li>
  );
}

export default ListItem;
