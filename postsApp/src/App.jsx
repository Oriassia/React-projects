import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import Navbar from "./components/NavBar";
import MyAccount from "./pages/MyAccount";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="home" element={<HomePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="my-account" element={<MyAccount />} />
        </Route>
      </Routes>
      <FooterComp />
    </>
  );
}

export default App;
