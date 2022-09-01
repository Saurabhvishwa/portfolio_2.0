import "./Skills.css";

import { skills, frontEnd, backEnd, db, other, tools } from "./SkillSet";
export function Skills() {
  return (
    <div className="container_skills">
      <div className="heading">
        <h1 className="display-4">Skills</h1>
      </div>
      <div className="wrapper_skills">
        <div className="skill_avatar">
          <div className="container-fluid">
            <div className="tech jumbotron">
              <h1 className="lead">Frontend Technologies</h1>
              <hr className="my-2" />
              <div className="icon_wrapper container-fluid">
                {frontEnd.map((skill) => {
                  return (
                    <img
                      src={skill.source}
                      alt={skill.name}
                      key={skill.name}
                      height="100px"
                      width="100px"
                    />
                  );
                })}
              </div>
            </div>
            <div className="tech jumbotron">
              <h1 className="lead">Backend Technologies</h1>
              <hr className="my-2" />
              <div className="icon_wrapper container-fluid">
                {backEnd.map((skill) => {
                  return (
                    <img
                      src={skill.source}
                      alt={skill.name}
                      key={skill.name}
                      height="100px"
                      width="100px"
                    />
                  );
                })}
              </div>
            </div>
            <div className="tech jumbotron">
              <h1 className="lead">Database Technologies</h1>
              <hr className="my-2" />
              <div className="icon_wrapper container-fluid">
                {db.map((skill) => {
                  return (
                    <img
                      src={skill.source}
                      alt={skill.name}
                      key={skill.name}
                      height="100px"
                      width="100px"
                    />
                  );
                })}
              </div>
            </div>
            <div className="tech jumbotron">
              <h1 className="lead">Other</h1>
              <hr className="my-2" />
              <div className="icon_wrapper container-fluid">
                {other.map((skill) => {
                  return (
                    <img
                      src={skill.source}
                      alt={skill.name}
                      key={skill.name}
                      height="100px"
                      width="100px"
                    />
                  );
                })}
              </div>
            </div>
            <div className="tech jumbotron">
              <h1 className="lead">Tools</h1>
              <hr className="my-2" />
              <div className="icon_wrapper container-fluid">
                {tools.map((skill) => {
                  return (
                    <img
                      src={skill.source}
                      alt={skill.name}
                      key={skill.name}
                      height="100px"
                      width="100px"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <ul className="list-group">
          {skills.map((skill, id) => (
            <li key={id} className="list-group-item">
              <div className="skill_name">
                <div>
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                  <label className="lead">{skill.name}</label>
                </div>
                <p>{skill.level}</p>
              </div>
              <div className="progress_bar">
                <div className="fill" style={{ width: skill.level }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
