import "./Experience.css";
import { companies as company } from "./Company";
export function Experience() {
  return (
    <div className="experience container-fluid">
      <div className="heading">
        <h1 className="display-4">Work Experience</h1>
      </div>
      <div className="exp_tab">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              {company[0].company_name.split(" ")[0]}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              {company[1].company_name}
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="container-fluid tab-pane fade show active"
            key={company[0].id}
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <div className="jumbotron">
              <h1 className="display-6">
                {company[0].designation} @&nbsp;
                <em> {company[0].company_name}</em>
              </h1>
              <p className="lead">{company[0].joined_at}</p>
              <hr className="my-2" />
              <ul>
                {company[0].achievements.map((achievement, index) => {
                  return <li key={index}>{achievement}</li>;
                })}
                <li>
                  Technology - <code>{company[0].technologies}</code>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="container-fluid tab-pane fade"
            key={company[1].id}
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex="1"
          >
            <div className="jumbotron">
              <h1 className="display-6">
                {company[1].designation} @&nbsp;
                <em>{company[1].company_name}</em>
              </h1>
              <p className="lead">{company[1].joined_at}</p>
              <hr className="my-2" />
              <ul>
                {company[1].achievements.map((achievement, index) => {
                  return <li key={index}>{achievement}</li>;
                })}
                <li>
                  Technology - <code>{company[1].technologies}</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
