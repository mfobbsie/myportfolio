/*App.tsx*/
import "./App.css";
import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import MrFestinPage from "./pages/MrFestinPage";
import TodoAppPage from "./pages/TodoAppPage";
import CommunityConnectorPage from "./pages/CommunityConnectorPage";
import TaskManagerPage from "./pages/TaskManagerPage";


function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <NavBar />

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="theme-toggle"
      >
        {theme === "light" ? "dark mode" : "light mode"}
      </button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mrfestin" element={<MrFestinPage />} />
        <Route path="/todoapp" element={<TodoAppPage />} />
        <Route path="/taskmanager" element={<TaskManagerPage />} />
        <Route
          path="/communityconnector"
          element={<CommunityConnectorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
