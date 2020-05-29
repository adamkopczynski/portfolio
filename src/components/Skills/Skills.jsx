import React from "react";

import Divider from "components/Divider";
import CodeIcon from "assets/icons/code.svg";
import ManagementIcon from "assets/icons/managment.svg";
import AgileIcon from "assets/icons/agile.svg";

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h3 className="mb-50 section-title">Skills</h3>
      <div className="row justify-content-center">
        <div className="col-3">
          <Divider />
        </div>
      </div>

      <div className="skills-content">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="skill-card-item">
              <div className="skill-card-header">
                <img src={ManagementIcon} />
                <h3>Project Managment</h3>
              </div>

              <div className="skill-card-content">
                I've participated in Project Management workshops at SkillUp
                Conference. I have basic knowledge about planning and delegating
                tasks, calculating risk and communicating in a team.
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="skill-card-item active">
              <div className="skill-card-header">
                <img src={CodeIcon} />
                <h3>Coding</h3>
              </div>

              <div className="skill-card-content">
                <h4>Technologies:</h4>
                <ul>
                  <li>React, React Native</li>
                  <li>Redux</li>
                  <li>Javascript</li>
                  <li>Elixir/Phoenix</li>
                  <li>MongoDB, Postgres</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="skill-card-item">
              <div className="skill-card-header">
                <img src={AgileIcon} />
                <h3>Agile/Scrum</h3>
              </div>

              <div className="skill-card-content">
                I've taken part in Scrum workshops on my university organised by
                Accenture company. We've learned about this framework in
                practice by doing tasks in sprints, organising "daily", planning
                and developing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
