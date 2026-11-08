
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="project-thumbnail"
        />
      ) : (
        <div className="project-image">📁</div>
      )}

      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;