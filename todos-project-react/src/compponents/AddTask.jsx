import React from "react";

function AddTask(props) {
  return (
    <form onSubmit={props.addTask} className="add-task">
      <input
        ref={props.addTodoInputElement}
        type="text"
        placeholder="New task..."
      />
      <button type="submit" onClick={props.addTodoFocusInput}>
        Add task
      </button>
    </form>
  );
}

export default AddTask;
