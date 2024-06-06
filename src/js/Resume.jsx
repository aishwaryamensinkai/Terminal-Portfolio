import React from "react";
import "../css/terminal.css";

const Resume = () => {
  const getHeader = () => {
    return (
      <div className="header">
        <h1>Aishwarya Girish Mensinkai</h1>
        <hr style={{ borderTop: "1px solid white" }} />
        <p>
          <span>
            <a href="tel:+13158636516">(+1)3158636516</a> |{" "}
          </span>
          <span>
            <a href="mailto:aishwaryamensinkai@gmail.com">
              aishwaryamensinkai@gmail.com
            </a>{" "}
            |{" "}
          </span>
          <span>
            <a
              href="https://aishwaryamensinkai.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>{" "}
            |{" "}
          </span>
          <span>
            <a
              href="https://github.com/aishwaryamensinkai"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/aishwarya-mensinkai/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
          </span>
        </p>
        <hr style={{ borderTop: "1px solid white" }} />
      </div>
    );
  };

  const getEducation = () => {
    return (
      <div className="education">
        <div>
          <h2>EDUCATION</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <div className="education-item">
          <strong>
            Syracuse University - College of Engineering & Computer Science,
            Syracuse, NY
          </strong>{" "}
          <strong>August 2022 – May 2024</strong>
          <p style={{ textAlign: "justify" }}>
            <i>Master of Science in Computer Science</i>
            <br />
            <b>Relevant Coursework:</b> Design and Analysis of Algorithms,
            Database Management System, Computer Architecture, Social Media and
            Data Mining, Data Analysis And Decision Test, Operating Systems,
            Object Oriented Design, Intro to Machine Learning & Algorithms,
            Mobile Application Programming.
          </p>
        </div>
        <div className="education-item">
          <strong>
            KLE Technological University - School of Computer Science and
            Engineering, Hubli, India{" "}
          </strong>
          <strong>August 2017 - June 2021</strong>
          <p>
            <i>Bachelor of Engineering in Computer Science</i>
            <br />
            <b>Relevant Coursework:</b> Database Management System, Data Mining
            and Analysis, Model Thinking, Computer Organization and
            Architecture, Web Technologies, Computer Networks.
          </p>
        </div>
      </div>
    );
  };

  const getProfessionalExperience = () => {
    return (
      <div className="professional-experience">
        <div>
          <h2>EXPERIENCE</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <div className="professional-experience-item">
          <strong>
            Co-op Program Student Employee as Web Developer, Syracuse University
            – Syracuse, New York{" "}
          </strong>
          <strong>November 2022 - June 2023</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Transformed Associated Gastroenterologists of CNY, PC website with
              WordPress, revamping UI/UX for better engagement. Increased
              average session duration by 25%, reducing bounce rate by 15%.
            </li>
            <li>
              Developed new tailored pages to showcase expertise and services,
              boosting organic traffic by 30%, resulting in 20% more appointment
              requests.
            </li>
            <li>
              Engaged closely with stakeholders to align enhancements with
              organizational goals, achieved a 95% stakeholder satisfaction
              rating, ensuring seamless integration of new features.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>
            Software Engineer, Anicca Data Science Solutions – Bangalore, India{" "}
          </strong>
          <strong>March 2022 - July 2022 </strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Spearheaded overhaul of RFM application for McDonald's, boosting
              functionality and user experience through implementation of
              Angular, HTML, CSS and Typescript, resulting in a 55% increase in
              user engagement.
            </li>
            <li>
              Pioneered transformation of McDonald's restaurant profiles,
              supplementing Angular, HTML, CSS, and Typescript to develop a
              modernized version of legacy application, attaining a 40%
              improvement in application performance and scalability.
            </li>
            <li>
              Orchestrated seamless collaboration with cross-functional teams to
              ensure rigorous testing and integration of front-end UI with
              server-side functionalities, guaranteeing 100% user input
              validation and a 50% reduction in bug occurrences.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>
            Engineer-Trainee, Pelatro Solutions Private Limited – Bangalore,
            India{" "}
          </strong>
          <strong>August 2021 - February 2022</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Revised mViva product performance with cutting-edge algorithms,
              leading to a 20% increase in offer retrieval efficiency from
              customer call data.
            </li>
            <li>
              Translated requirements into robust test solutions, executing
              Java-based plans to resolve issues, accomplishing a 95% reduction
              in post-release bugs.
            </li>
            <li>
              Participated in achieving 100% test coverage through requirement
              analysis and collaboration, ensuring seamless product
              functionality.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>Web Development Intern, Felicity – Jaipur, India </strong>
          <strong>April 2021 - July 2021</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Collaborated on the migration of codebase from AngularJS to
              Angular 7, resulting in a 30% enhancement in website performance
              and a 20% reduction in load times.
            </li>
            <li>
              Optimized wireframes on Figma, pioneering a streamlined website
              creation process. Implemented responsive design strategies,
              boosting user engagement by 25% across various platforms and
              screen sizes.
            </li>
            <li>
              Integrated front-end and back-end systems with a 98% error-free
              loading rate. Accomplished specialized features (Video, Audio, and
              Chat Sessions) for Mental Health Counseling, increasing user
              engagement by 40%.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>Intern, Transil.Inc – Hubballi, India </strong>
          <strong>January 2019 - May 2019</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Presented a robust Hotel Management database model, integrating
              five data flows and a functional application prototype, earning
              accolades from the university and showcasing expertise in database
              design and application development.
            </li>
            <li>
              Engineered a dynamic web application leveraging Angular, Node.js,
              Express.js, and MongoDB, delivering seamless navigation for
              superior UI/UX, leading to a remarkable 45% uptick in user
              engagement metrics.
            </li>
            <li>
              Directed a team of 4 engineers in crafting wireframes and designs
              using Figma, optimizing client requirement gathering and input
              assessment processes, resulting in a 60% boost in project
              efficiency.
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const getProjects = () => {
    return (
      <div className="professional-experience">
        <div>
          <h2>PROJECTS</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <div className="professional-experience-item">
          <strong>TradeMaster: Revolutionizing Crypto Insights</strong>
          <strong>January 2024 - May 2024</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Engineered seamless integration of CoinGecko and News API,
              improving accessibility by 25% through screen reader compatibility
              and adjustable font sizes, leveraging SwiftUI for development.
            </li>
            <li>
              Championed intuitive UI design using Figma, raising user retention
              by 45% and enhancing overall usability metrics.
            </li>
            <li>
              Implemented Agile methodologies, resulting in a notable 20%
              reduction in development time and ensuring efficient project
              management practices.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>
            Predicting Response Time of the Paris Fire Brigade Vehicles
          </strong>
          <strong>August 2019 - December 2020</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Engineered and deployed predictive models utilizing Ridge, Lasso,
              and Linear Regression techniques to forecast the response times of
              Paris Fire Brigade vehicles, achieving a prediction accuracy
              improvement of 15% compared to baseline models
            </li>
            <li>
              Executed comprehensive data preprocessing steps including outlier
              removal, null value imputation, and categorical data conversion,
              enhanced dataset quality and improved model performance by 10%.
            </li>
            <li>
              Conducted feature selection and optimization, reducing irrelevant
              attributes by 20% and improving the relevance and accuracy of
              prediction models, leading to more reliable emergency response
              time predictions.
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const getSkills = () => {
    return (
      <div className="skills">
        <div>
          <h2>TECHNICAL SKILLS</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <ul>
          <li>
            <strong>Programming Languages :</strong> C | C++ | SQL | HTML5 | CSS
            | JavaScript | Typescript | Python | Java | SQL | HTML
          </li>
          <li>
            <strong>Frameworks :</strong> React.js | Angular.js | Node.js |
            Flutter | Firebase | RESTful APIs | Graphql | MongoDB | MySQL |
            Swift UI | PostgreSQL
          </li>
          <li>
            <strong>Operating Systems :</strong> Linux Distribution (Ubuntu,
            Kali) | Windows 10 | Mac OS | Virtualization.
          </li>
          <li>
            <strong>Software :</strong> MS Word, PowerPoint, Excel | VS Code |
            Postman | Eclipse | Git | WordPress | Spring Boot | Gradle | Xcode |
            Android Studio | Figma
          </li>
        </ul>
      </div>
    );
  };

  const getCertifications = () => {
    return (
      <div className="achievements-and-certifications">
        <div>
          <h2>CERTIFICATIONS</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <ul className="certi">
          <li>AWS Cloud Practitioner - Associate (Ongoing)+</li>
          <li>AWS Certified Solutions Architect - Associate (Ongoing)</li>
          <li>Google UX Design</li>
          <li>DevOps, Cloud, and Agile Foundations</li>
          <li>Version Control From Meta</li>
          <li>AWS Fundamentals: Going Cloud-Native</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="output resume">
      {getHeader()}
      {getEducation()}
      {getSkills()}
      {getCertifications()}
      {getProfessionalExperience()}
      {getProjects()}
    </div>
  );
};

export default Resume;
