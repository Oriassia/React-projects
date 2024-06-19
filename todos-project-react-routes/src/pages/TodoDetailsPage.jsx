import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function TodoDetailsPage() {
  const { id } = useParams();
  const [todoItem, setTodoItem] = useState({});

  useEffect(() => {
    const fetchTodoItem = async () => {
      try {
        const response = await fetch(`http://localhost:8001/todos/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTodoItem(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodoItem();
  }, [id]);

  return (
    <div className="todo-details-container">
      <h1>Todo Detail</h1>
      <div className="todo-details">
        <div className="detail-item">
          <strong>Todo ID:</strong>
          <p>{todoItem.id}</p>
        </div>
        <div className="detail-item">
          <strong>Title:</strong>
          <p>{todoItem.title}</p>
        </div>
        <div className="detail-item">
          <strong>Description:</strong>
          <p>{todoItem.description}</p>
        </div>
        <div className="detail-item">
          <strong>Status:</strong>
          <p>{todoItem.isComplete ? "Completed" : "Active"}</p>
        </div>
      </div>
      <Link to="/todos" className="back-link">
        Back to Todos
      </Link>
    </div>
  );
}

export default TodoDetailsPage;
