import { motion } from "framer-motion";
import AIPhotoIntro from "../../images/AIPhotoIntro.JPG";

function Home() {
  return (
    <div className="homePageContainer" id="home">
      <div className="leftSideHome">
        <div className="introPhoto">
          <img src={AIPhotoIntro} />
        </div>

        <div className="introGreeting">
          <h4>Hi, I'm</h4>
          <h1>NIHAD YAGUBLU</h1>
          <h3>FRONT-END DEVELOPER</h3>
        </div>
      </div>

      <div className="rightSideHome">
        <p>{`1  class Person {`}</p>

        <p>
          {`2 `} {`\u00A0`} {`constructor() {`}
        </p>

        <p>
          {`3 `} {`\u00A0`} {`\u00A0`} {` this.name = "Nihad Yagublu";`}
        </p>

        <p>
          {`4 `} {`\u00A0`} {`\u00A0`}
          {` this.profession = "Front-end Developer";`}
        </p>

        <p>
          {`5 `} {`\u00A0`} {`\u00A0`}
          {` this.characteristics = ["HARD-WORKING", "CREATIVE", "RESPONSIBLE", "DEDICATED", "KAIZENING"];`}
        </p>

        <p>
          {`6 `} {`\u00A0`} {`\u00A0`}
          {` this.additionalTraits=["SPREADING POSITIVE ENERGY", "FUN TO SPEND TIME WITH", "GOOD VIBES", "OPTIMISTIC"];`}
        </p>

        <p>
          {`7 `} {`\u00A0`} {`}`}
        </p>

        <p>
          {`8 `} {`}`}
        </p>
      </div>
    </div>
  );
}

export default Home;
