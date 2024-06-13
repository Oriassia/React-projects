import React from "react";
import ListItem from "./ListItem";

// Create the UI structure & sort tasks by actives first
function TodoList(props) {
  // Separate active and completed tasks
  const activeTasks = props.todos.filter((todo) => !todo.isComplete);
  const completedTasks = props.todos.filter((todo) => todo.isComplete);

  return (
    <div className="todos-list-container">
      {props.todos.length === 0 ? (
        <span>No tasks available...</span>
      ) : (
        <ul className="todos-list">
          {/* Active tasks */}
          {activeTasks.map((todo) => (
            <ListItem
              key={todo.id}
              todo={todo}
              toggleCompleted={props.toggleCompleted}
              removeTask={props.removeTask}
              addTodoFocusInput={props.addTodoFocusInput}
            />
          ))}

          {/* Completed tasks */}
          {completedTasks.map((todo) => (
            <ListItem
              key={todo.id}
              todo={todo}
              toggleCompleted={props.toggleCompleted}
              removeTask={props.removeTask}
              addTodoFocusInput={props.addTodoFocusInput}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
