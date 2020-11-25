import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML", porcentage: "75%", value: "75" },
        { id: "CSS3_skill", content: "CSS", porcentage: "60%", value: "60" },
        { id: "JavaScript_skill", content: "Java Script", porcentage: "70%", value: "70" },
        { id: "ReactJS_skill", content: "React", porcentage: "55%", value: "55" },
        { id: "Angular_skill", content: "Angular", porcentage: "80%", value: "80" },
        { id: "MySQL_skill", content: "MySQL", porcentage: "75%", value: "75" },
        { id: "MongoDB_skill", content: "MongoDB", porcentage: "60%", value: "60" },
        { id: "NodeJS_skill", content: "NodeJS", porcentage: "90%", value: "90" },
        { id: "C++_skill", content: "C++", porcentage: "75%", value: "75" },
        { id: "C#_skill", content: "C#", porcentage: "75%", value: "75" }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Heyy... I've Done My BCA in 2020, Now I'm  a Student of MCA (Masters of Computer Applications). I Love Programming, Development and Music."
        },
        {
          id: "second-p-about",
          content:
            "A motivated individual with the warm knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills"
        },
        {
          id: "third-p-about",
          content:
            "Software developers are the creative minds behind software programs, and they have the technical skills to build those programs or to oversee their creation by a team. They create software that enables users to perform specific tasks on computer devices"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
