import ScreenshotBookstore from "../../images/ScreenshotBookstore .png";

export default function SingleProject({
  image,
  title,
  description,
  projectCode,
  liveDemo,
}) {
  return (
    <div className="single-project-container">
      <img src={image} />
      <div className="single-project-details">
        <h3 style={{ margin: "0" }}>{title}</h3>
        <div className="single-project-par">
          <p align="justify">{description}</p>
        </div>

        <div className="single-project-actions">
          <a href={projectCode} target="_blank">
            <button>Code</button>{" "}
          </a>

          <a href={liveDemo} target="_blank">
            <button>Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
}
