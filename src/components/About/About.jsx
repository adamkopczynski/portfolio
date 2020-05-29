import React from "react";
import Divider from "components/Divider";
import Button from "components/Button";
import CV from "assets/files/Adam Kopczynski - CV.pdf";
import me from "assets/images/me.jpg";

const About = () => {
  return (
    <section className="section about" id="about">
      <h3 className="mb-50 section-title">About me</h3>
      <div className="row justify-content-center">
        <div className="col-3">
          <Divider />
        </div>
      </div>

      <div className="section-content">
        <div className="row justify-content-center">
          <div className="col-md-5 col-sm-12">
            <div className="info-card">
              <img src={me} alt="Adam Kopczynski" />
              <div className="card-content">
                <h2>Adam Kopczyński</h2>
                <h3>Javascript Developer</h3>
                <p>
                  I am an enthusiast of new technologies, loved with React and
                  NodeJS. I try to improve my skills every day. I often
                  participate in conferences, hackathons and workshops.
                </p>
                <Button
                  target="_blank"
                  href="https://www.linkedin.com/in/adamkopczynski/"
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
