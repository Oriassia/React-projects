import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function ListItem(props) {
  return (
    <li>
      <div
        className={`todo-info ${props.todo.isComplete ? "checked-todo" : ""}`}
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

      <div>
        <Tooltip title="Delete">
          <DeleteIcon
            className="trash-icon"
            fontSize="small"
            onClick={() => props.removeTask(props.todo.id)}
          />
        </Tooltip>

        <Link to={`/todos/${props.todo.id}`}>
          <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
        </Link>
      </div>
    </li>
  );
}

export default ListItem;
