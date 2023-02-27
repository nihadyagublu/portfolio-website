import TheMyProjects from "../../images/TheMyProjects.jpg";
import SingleProject from "./SingleProject";
import { ProjectsData } from "../../store/ProjectsData";

function Projects() {
  return (
    <div className="ProjectSection" id="projects">
      <header className="projectsHeader">
        <h1
          style={{
            color: "rgb(10, 7, 60)",
          }}
        >
          MY
        </h1>
        <h1 style={{ color: "white" }}>PROJECTS</h1>
      </header>

      <section className="projectsIntro">
        <div className="projectsIconPhoto">
          <img src={TheMyProjects} />
        </div>

        <span className="projectsIntroPar">
          {" "}
          <p>
            Here are some of the projects I have done in the spare time that I
            had outside of my regular busy workflow:{" "}
          </p>
        </span>
      </section>

      <div className="projectsList">
        <ul>
          {ProjectsData.map((projectData) => (
            <SingleProject
              id={projectData.id}
              key={projectData.id}
              image={projectData.image}
              title={projectData.title}
              description={projectData.description}
              liveDemo={projectData.liveDemo}
              projectCode={projectData.projectCode}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
