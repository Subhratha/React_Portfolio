  import React from "react";

  const App = () => {
    const portfolioData = {
      name: "Subhratha Sinha",
      reg:"21BCE5478",
      skills: ["Communication Skills, Problem-Solving, Critical Thinking, Attention to Detail and Time Management"],
      projects: [
        {
          title: "ImageQuest ",
          description: "Developed a user-friendly website for customized image search.",
        },
        {
          title: "Crime Identifier and Database Updation",
          description: "Developed a Python-based software using RetinaNet to analyze CCTV camera footage",
        },
        {
          title: "QuizHub and Blogify",
          description: "Developed an interactive quizzing web platform and a feature-rich blogging website.",
        },
      ],
    };
  
    return (
      <div className="portfolio">
        <div className="frame">
          <div className="header">
            <h1>{portfolioData.name}</h1>
            <h2><u>REGISTRATION NUMBER:</u> {portfolioData.reg}</h2>
          </div>
          <div className="body">
            <div className="about">
              <h3><u>ABOUT ME</u></h3>
              <p>Dedicated and proactive Computer Science enthusiast with a proven track record of professionalism and excellence across diverse projects. 
                Seeking to leverage my insights and skills to thrive amidst challenges and contribute effectively to dynamic software development teams. 
                As an avid learner, I am committed to continuous improvement and remain poised to embrace emerging technologies. 
                With a strong foundation in programming, problem-solving, and collaboration, I am ready to tackle the next level of innovation. </p>
            </div>
            <div className="skills">
              <h3><u>SKILLS</u></h3>
              <ul>
                {portfolioData.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="projects">
              <h3><u>PROJECTS</u></h3>
              {portfolioData.projects.map((project) => (
                <ul>
                  <div className="project" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                </ul>
                
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default App;