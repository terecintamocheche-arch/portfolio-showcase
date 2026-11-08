import { useState } from "react";
function ProjectForm({ addProject }) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    addProject({
      id: Date.now(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;

