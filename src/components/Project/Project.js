import "./Project.css";
import { Projects } from "./Projects";
export function Project() {
  return (
    <div className="project container-fluid">
      <div className="heading">
        <h1 className="display-4">Projects</h1>
      </div>
      <div className="project_wrapper container-fluid">
        {Projects.map((project) => {
          return (
            <div className="jumbotron" key={project.id}>
              <h1 className="display-6">{project.name}</h1>
              <p className="lead">{project.description}</p>
              <hr className="my-4" />
              <p>
                <code>{project.technologies}</code>
              </p>
              <p className="lead">
                <a type="button" className="btn" href={project.git_link}>
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                {project.online_link && (
                  <a type="button" className="btn" href={project.online_link}>
                    <i
                      className="fa fa-external-link-square"
                      aria-hidden="true"
                    ></i>
                  </a>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
