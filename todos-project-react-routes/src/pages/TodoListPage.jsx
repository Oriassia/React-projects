import React, { useEffect, useMemo, useRef, useState } from "react";
import TodoList from "../../components/TodoList";
import AddTask from "../../components/AddTask";
import Statistics from "../../components/Statistics";
import FilterSection from "../../components/FilterSection";
import { useSearchParams } from "react-router-dom";

function TodoListPage() {
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const [todos, setTodos] = useState([]);
  const [selectFilter, setSelectFilter] = useState("all");

  useEffect(() => {
    fetchData();
    addTodoFocusInput();
  }, []);

  // Fetch todos from the server
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

  // Generate a random ID
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

  const addTodoInputElement = useRef(null);
  function addTodoFocusInput() {
    if (addTodoInputElement.current) {
      addTodoInputElement.current.focus();
    }
  }

  async function toggleCompleted(todoId) {
    let updatedTodo = null;
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        updatedTodo = { ...todo, isComplete: !todo.isComplete };
        return updatedTodo;
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
      body: JSON.stringify(updatedTodo),
    });
  }

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
      console.error("Error deleting todo:", error);
    }
  }

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

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesSearch = todo.title
        .toLowerCase()
        .includes(searchParams?.get("search")?.toLowerCase());

      switch (selectFilter) {
        case "all":
          return matchesSearch;
        case "completed":
          return matchesSearch && todo.isComplete;
        case "active":
          return matchesSearch && !todo.isComplete;
        default:
          return false;
      }
    });
  }, [todos, searchParams, selectFilter]);

  return (
    <>
      <div className="main-wrapper">
        <header>My todos:</header>
        <div className="add-task-container">
          <AddTask
            addTask={addTask}
            addTodoFocusInput={addTodoFocusInput}
            addTodoInputElement={addTodoInputElement}
          />
        </div>
        <div
          className="content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Statistics todos={todos} />

          <FilterSection
            filterSelect={selectFilter}
            setSelectFilter={setSelectFilter}
            setSearchParams={setSearchParams}
            searchParams={searchParams}
          />
          <div className="content-list">
            <TodoList
              todos={filteredTodos}
              toggleCompleted={toggleCompleted}
              removeTask={removeTask}
              addTodoFocusInput={addTodoFocusInput}
            />
          </div>
        </div>
        <footer></footer>
      </div>
    </>
  );
}

export default TodoListPage;
