import React from "react";
import ListItem from "./ListItem";

// create the UI structure & sort tasks by actives first
function TodoList(props) {
  return (
    <div className="todos-list-container">
      {props.todos.length === 0 ? (
        <span>No tasks available...</span>
      ) : (
        <ul className="todos-list">
          {/* Active tasks */}
          {props.todos
            .filter((todo) => !todo.isComplete)
            .map((todo) => (
              <ListItem
                todo={todo}
                toggleCompleted={props.toggleCompleted}
                removeTask={props.removeTask}
                addTodoFocusInput={props.addTodoFocusInput}
              />
            ))}

          {/* Completed tasks */}
          {props.todos
            .filter((todo) => todo.isComplete)
            .map((todo) => (
              <ListItem
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
