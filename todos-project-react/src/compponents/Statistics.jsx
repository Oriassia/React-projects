import React from "react";
function Statistics(props) {
  const completedTasksCounter = props.todos.filter(
    (todo) => todo.isComplete
  ).length;

  const activeTasksCounter = props.todos.length - completedTasksCounter;

  return (
    <>
      <span>Completed tasks: {completedTasksCounter}</span>
      <span>Active tasks: {activeTasksCounter}</span>
      <span>
        {props.todos.length > 0
          ? ((completedTasksCounter / props.todos.length) * 100).toFixed()
          : 0}
        %
      </span>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${
              props.todos.length > 0
                ? (completedTasksCounter / props.todos.length) * 100
                : 0
            }%`,
          }}
        ></div>
      </div>
    </>
  );
}

export default Statistics;
