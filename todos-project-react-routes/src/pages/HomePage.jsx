import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <div className="header">
        <h1>Welcome to the Todo App</h1>
        <p>
          Organize your tasks efficiently with our easy-to-use Todo application.
        </p>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Keep track of all your tasks in one place.</p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Mark tasks as completed and manage your workflow.</p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Filter tasks by status and search by keywords.</p>
        </div>
      </div>
      <div className="get-started">
        <NavLink to="/todos" className="get-started-link">
          Get Started
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
