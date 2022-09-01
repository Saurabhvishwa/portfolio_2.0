import "./About.css";
export function About() {
  return (
    <div className="about container-fluid">
      <div className="heading">
        <h1 className="display-4">About Me</h1>
      </div>
      <div className="jumbotron">
        <p className="lead">
          Hello! My name is <em>Saurabh Vishwakarma</em> and I enjoy creating
          applications that can run on internet. I got interest into software
          engineering back in 2017 when I was first introduced to Javascript.
        </p>
        <p className="lead">
          I also have a good problem solving ability and have solved 350+
          problems across various online coding platforms in Java.
        </p>
        <p className="lead">
          Today, I have ability to work on software development with a team with
          same spirit. Nowadays, my main focus is on Scalable Distributed System
          Design.
        </p>
        <p className="lead">
          I have also developed some full stack based projets on my own to get
          familiarized with technologies primarily used for application
          development.
        </p>

        <hr className="my-2" />
        <p className="lead">
          Here are a few technologies I've been working with recently :
          <code>
            <li>Java</li>
            <li>SpringBoot</li>
            <li>MSSQL Server</li>
            <li>Kafka</li>
            <li>Docker</li>
            <li>Angular</li>
          </code>
        </p>
      </div>
    </div>
  );
}
