import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoListPage from "./pages/TodoListPage";
import TodoDetailsPage from "./pages/TodoDetailsPage";

function TopNavLink(props) {
  const { href, children } = props;
  return (
    <NavLink
      style={({ isActive }) => {
        return isActive ? { color: "salmon" } : {};
      }}
      to={href}
    >
      {children}
    </NavLink>
  );
}

function App() {
  return (
    <>
      <nav>
        <ul className="nav-bar">
          <li>
            <TopNavLink href="/">Home</TopNavLink>
          </li>
          <li>
            <TopNavLink href="/todos">Todos</TopNavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodoListPage />} />
        <Route path="/todos/:id" element={<TodoDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
