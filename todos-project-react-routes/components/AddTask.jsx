import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

function AddTask(props) {
  return (
    <form onSubmit={props.addTask} className="add-task">
      <TextField
        inputRef={props.addTodoInputElement}
        id="outlined-basic"
        label="Add new task"
        variant="outlined"
        sx={{ display: "flex", width: "100%" }}
      />

      <Tooltip title="Add task">
        <Button
          onClick={props.addTask}
          variant="contained"
          sx={{ padding: "0", minWidth: "40px" }}
        >
          <AddIcon />
        </Button>
      </Tooltip>
    </form>
  );
}

export default AddTask;
