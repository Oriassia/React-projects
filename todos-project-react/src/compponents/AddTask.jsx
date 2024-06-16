import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function AddTask(props) {
  return (
    <form onSubmit={props.addTask} className="add-task">
      <input
        ref={props.addTodoInputElement}
        type="text"
        placeholder="New task..."
      />
      <Button
        onClick={props.addTask}
        variant="contained"
        sx={{ padding: "0", minWidth: "40px" }}
      >
        <AddIcon />
      </Button>
    </form>
  );
}

export default AddTask;
