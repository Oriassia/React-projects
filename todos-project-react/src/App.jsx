import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import TodoList from "./compponents/TodoList";
import AddTask from "./compponents/AddTask";
import Statistics from "./compponents/Statistics";

function App() {
  // init statments
  const [todos, setTodos] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8001/todos");
      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      } else {
        console.error("Failed to fetch todos");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // returns random id's
  function makeId(length = 6) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // init function (after first render)
  useEffect(() => {
    console.log(todos);
    addTodoFocusInput();
  }, [todos]);

  // init function (after every render)
  useEffect(() => {
    fetchData();
    console.log("hello");
    addTodoFocusInput();
  }, []);

  // grabing input elem + focus func
  const addTodoInputElement = useRef();
  function addTodoFocusInput() {
    addTodoInputElement.current.focus();
  }

  // toggle "isCompleted" propertie by given id (UI & DATA)
  async function toggleCompleted(todoId) {
    let updateTodo = null;
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        updateTodo = { ...todo, isComplete: !todo.isComplete };
        return updateTodo;
      } else {
        return todo;
      }
    });

    setTodos(newTodos);

    await fetch(`http://localhost:8001/todos/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTodo),
    });
  }

  // delete a todo task by given id (UI & DATA)
  async function removeTask(todoId) {
    try {
      const newTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(newTodos);

      const response = await fetch(`http://localhost:8001/todos/${todoId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the todo.");
      }
    } catch (error) {
      setTodos(todos); // Revert to previous state
      console.error("Error deleting todo:", error);
    }
  }

  // add a todo task (UI & DATA)
  async function addTask(e) {
    e.preventDefault();
    if (addTodoInputElement.current.value.trim() === "") return;
    const newTask = {
      id: makeId(),
      title: addTodoInputElement.current.value,
      isComplete: false,
    };
    setTodos((todos) => [...todos, newTask]);

    try {
      await fetch("http://localhost:8001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
    } catch (error) {
      console.error("Error adding task:", error);
    }
    addTodoInputElement.current.value = "";
  }

  // UI structure based on current data (local todos)
  return (
    <>
      <header>My todos:</header>
      <div className="add-task-container">
        <AddTask
          addTask={addTask}
          addTodoFocusInput={addTodoFocusInput}
          addTodoInputElement={addTodoInputElement}
        />
      </div>

      <div className="content">
        <TodoList
          todos={todos}
          toggleCompleted={toggleCompleted}
          removeTask={removeTask}
          addTodoFocusInput={addTodoFocusInput}
        />

        <div className="side-bar">
          <Statistics todos={todos} />
        </div>
      </div>
      <footer></footer>
    </>
  );
}

export default App;
