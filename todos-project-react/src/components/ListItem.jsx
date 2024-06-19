import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";

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

      <Tooltip title="Delete">
        <DeleteIcon
          className="trash-icon"
          fontSize="small"
          onClick={() => props.removeTask(props.todo.id)}
        />
      </Tooltip>
    </li>
  );
}

export default ListItem;
