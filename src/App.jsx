import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "My First Project",
      description: "A sample project in my portfolio.",
    },
  ]);

  const [search, setSearch] = useState("");

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <main className="container">
        <h2>Add a New Project</h2>
        <ProjectForm addProject={addProject} />

        <h2>My Projects</h2>
        <SearchBar search={search} setSearch={setSearch} />

        <ProjectList projects={filteredProjects} />
      </main>
    </div>
  );
}

export default App;