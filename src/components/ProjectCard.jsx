function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">📁</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;