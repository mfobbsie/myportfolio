/*App.tsx*/
import "./App.css";
import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ContactPage from "./components/ContactPage";
import ProjectsPage from "./components/ProjectsSection";
import AboutPage from "./components/AboutSection";
import MrFestinPage from "./components/projects/MrFestin";
import TodoAppPage from "./components/projects/TodoApp";
import CommunityConnectorPage from "./components/projects/CommunityConnector";
import TaskManagerPage from "./components/projects/TaskManager";


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
