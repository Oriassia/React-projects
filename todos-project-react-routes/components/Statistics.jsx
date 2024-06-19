import React from "react";
function Statistics(props) {
  const completedTasksCounter = props.todos.filter(
    (todo) => todo.isComplete
  ).length;

  const activeTasksCounter = props.todos.length - completedTasksCounter;

  return (
    <>
      <div className="statistics-section">
        <div className="task-info">
          <span>Completed tasks: {completedTasksCounter}</span>
        </div>
        <div className="task-info">
          <span>Active tasks: {activeTasksCounter}</span>
        </div>
        <div className="task-info">
          <span>
            {props.todos.length > 0
              ? ((completedTasksCounter / props.todos.length) * 100).toFixed()
              : 0}
            %
          </span>
        </div>
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
      </div>
    </>
  );
}

export default Statistics;
