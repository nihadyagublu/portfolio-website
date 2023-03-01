import TheAboutPhoto from "../../images/TheAboutPhoto.JPG";

export default function About() {
  return (
    <div className="aboutSection" id="about">
      <header className="aboutHeader">
        <h1 style={{ color: "white" }}>ABOUT</h1>
        <h1
          style={{
            color: "var(--theme-second-color)",
          }}
        >
          ME
        </h1>
      </header>

      <div className="quoteAbout">
        <div>
          <p>
            {" "}
            "Success is not a one-time event, it is the result of consistent
            effort and continuous action."
          </p>
        </div>

        {/* <p style={{ textAlign: "right" }}> -Denis Waitley</p> */}
      </div>
      <div className="aboutMain">
        <section className="aboutParagraphSection">
          <p align="justify">
            Hi, I'm Nihad Yagublu, a self-taught front-end developer with 5
            years of work experience in delivering web services. I love building
            cool and interactive UIs{" "}
            <b
              style={{
                backgroundColor: "var(--theme-second-color)",
              }}
            >
              to provide pleasant user experience.
            </b>
          </p>
          <p align="justify">
            I believe{" "}
            <b
              style={{
                backgroundColor: "var(--theme-second-color)",
              }}
            >
              consistency
            </b>{" "}
            is the key to success. Consistent effort, work ethic and discipline
            create wonders one cannot imagine.{" "}
            <b
              style={{
                backgroundColor: "var(--theme-second-color)",
              }}
            >
              {" "}
              Leaving your comfort zone, challenging yourself, having a
              long-term vision, and strategic planning
            </b>{" "}
            are vital ingredients which inevitably bring growth.
          </p>
          <p align="justify">
            The tech stack that I use:{" "}
            <b
              style={{
                backgroundColor: "var(--theme-second-color)",
              }}
            >
              HTML, CSS(SASS/SCSS, Bootstrap, Tailwind), Javascript,
              ReactJS(React Redux, Redux Toolkit, React Router, React Transition
              Group, Framer Motion), Next.js, Typescript, Java(SE) and MongoDB.
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
