import TheAboutPhoto from "../../images/TheAboutPhoto.JPG";

export default function About() {
  return (
    <div className="aboutSection" id="about">
      <header className="aboutHeader">
        <h1 style={{ color: "white" }}>ABOUT</h1>
        <h1
          style={{
            color: "rgb(10, 7, 60)",
          }}
        >
          ME
        </h1>
      </header>

      <div className="quote">
        <p>
          {" "}
          "Success is not a one-time event, it is the result of consistent
          effort and continuous action."
        </p>
        {/* <p style={{ textAlign: "right" }}> -Denis Waitley</p> */}
      </div>
      <div className="aboutMain">
        <section className="aboutParagraphSection">
          <p align="justify">
            Hi, I'm Nihad Yagublu, a self-taught front-end developer with 5
            years of work experience in delivering web services. I love building{" "}
            <b
              style={{
                backgroundColor: "rgb(10, 7, 60)",
              }}
            >
              cool and interactive UIs to provide pleasant user experience.
            </b>
          </p>
          <p align="justify">
            I believe{" "}
            <b
              style={{
                backgroundColor: "rgb(10, 7, 60)",
              }}
            >
              consistency
            </b>{" "}
            is the key to success. Consistent effort, work ethic and discipline
            creates wonders one cannot even imagine. Strategic plan continuously
            challenging oneself and carefully moving out from the comfort zone
            planned hardsip brings growth
          </p>
          <p align="justify">
            The tech stack that I use are:
            <b
              style={{
                backgroundColor: "rgb(10, 7, 60)",
              }}
            >
              HTML, CSS(SASS, SCSS, Bootstrap, Tailwind), Javascript,
              React.js(Redux, Redux Toolkit, Router, React Transition Group,
              Framer Motion), Next.js, Typescript, Java(SE) and MongoDB.
            </b>
          </p>
        </section>

        <section className="aboutPhoto">
          <img src={TheAboutPhoto} />
        </section>
      </div>
    </div>
  );
}
