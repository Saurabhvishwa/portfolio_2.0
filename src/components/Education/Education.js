import "./Education.css";
import { college } from "./College";
export function Education() {
  return (
    <div className="education container-fluid">
      <div className="heading">
        <h1 className="display-4">Education</h1>
      </div>
      {college.map((clg) => {
        return (
          <div className="timeline container-fluid" key={clg.id}>
            <div className="time_bar container-fluid">
              <div className="circle">{clg.icon}</div>
              <div className="line" />
            </div>
            <div className="jumbotron">
              <h1 className="display-6">{clg.name}</h1>
              <hr className="my-2" />
              <p className="lead">
                Stream : <em>{clg.stream}</em>
              </p>
              <p className="lead">
                Graduated In : <em>{clg.graduated_in}</em>
              </p>
              <p className="lead">
                Percentage : <em>{clg.score}</em>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
