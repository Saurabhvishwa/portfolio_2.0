import "./Home.css";
import animationData from "../../images/Lottie2";
import Lottie from "react-lottie";

export function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  const socialLinks = [
    {
      name: "user",
      icon: <i className="fa fa-user-circle" aria-hidden="true"></i>,
      link: "#",
    },
    {
      name: "Linkedin",
      icon: <i className="fa fa-linkedin" aria-hidden="true"></i>,
      link: "https://www.linkedin.com/in/saurabh-vishwakarma-618332194",
    },
    {
      name: "Github",
      icon: <i className="fa fa-github" aria-hidden="true"></i>,
      link: "https://github.com/saurabhvishwa",
    },
    {
      name: "Gmail",
      icon: <i className="fa fa-envelope" aria-hidden="true"></i>,
      link: "mailto:saurbhvkrma@gmail.com",
    },
  ];
  return (
    <div className="home container-fluid">
      <div className="heading container-fluid">
        <div className="title container-fluid">
          <h1 className="display-6 font-weight-bold">Portfolio</h1>
        </div>

        <div className="social continer-fluid">
          {socialLinks.map((social) => {
            return (
              <button
                key={social.name}
                type="button"
                className="btn"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="Tooltip on bottom"
                onClick={() => (window.location.href = social.link)}
              >
                {social.icon}
              </button>
            );
          })}
        </div>
      </div>
      <div className="content container-fluid">
        <div className="left container-fluid">
          <div className="jumbotron">
            <h1 className="display-5 font-weight-bold">
              Hi All, I'm <em>Saurabh</em>
            </h1>
            <p className="lead">
              I am a Software Engineer and Programming Enthusiast with over 1+
              years of experience in software development.
            </p>
            <hr />
            <p className="my-2">
              A Software Engineer with excellent reputation for resolving
              problems and improving customer satisfaction. Equipped with a good
              problem solving ability as I consistently solve problems on
              <b> Leetcode, GFG, Codechef</b> etc. Demonstrated an excellent
              contribution as a team member using GitLab or GitHub. Working
              experience on popular back-end technologies to develop{" "}
              <b>RestAPI or Microservices</b>.
            </p>
            <p className="resume">
              <button
                type="button"
                className="btn"
                onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/file/d/1ZSeSeGOcOIVPO1jp5RxQ1NzJzbNywCvU/view?usp=sharing")
                }
              >
                <i className="fa fa-file-text" aria-hidden="true"></i>
                See My Resume
              </button>
            </p>
          </div>
        </div>
        <div className="right container-fluid">
          <Lottie
            options={defaultOptions}
            className="lottie"
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
