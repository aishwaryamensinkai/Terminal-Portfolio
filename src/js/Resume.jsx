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
            Software Engineer, Microsoft (via Anicca Data Science Solutions) , –
            Bellevue, WA{" "}
          </strong>
          <strong>January 2025 - Present</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Collaborated on automation of Linux hardware testing and AutoBSL
              injection, reducing setup time by 80% and contributing to
              $60K/month in team savings across 100+ weekly server deployments.
            </li>
            <li>
              Automated post-install cleanup on Azure blade servers using C# and
              integrated secure workflows into provisioning pipelines, reducing
              manual errors by 60% and improving system hygiene, rollout
              efficiency, and performance consistency across global data
              centers.
            </li>
            <li>
              Led Proxmox-based distributed system and high-availability cluster
              setup for Anicca supporting dynamic scaling and 99.99% uptime,
              improving service continuity and cutting downtime risk by 40%.
            </li>
            <li>
              Coordinated Agile sprints and on-call support, cutting incident
              resolution time by 35%, boosting backend reliability across cloud
              services.
            </li>
            <li>
              Developed and maintained backend services for an HR application
              tool using Java and Spring Boot, applying TDD with JUnit and
              Mockito to ensure 90%+ test coverage and robust functionality
            </li>
            <li>
              Implemented GitLab CI pipelines to automate build, test, and
              deployment, improving delivery speed and reducing integration
              issues for the HR platform
            </li>
            <li>
              Built responsive and accessible user interfaces in React, HTML5,
              CSS3, and JavaScript, enabling seamless cross-device experience
              for internal HR operations and reducing support requests by 25%
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>
            Full Stack Developer, ECS at Syracuse University – Syracuse, New
            York{" "}
          </strong>
          <strong>January 2024 - January 2025</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Led full-stack development of an AI-powered Smart Study Planner
              SaaS using OpenAI LLMs, Firebase, and Firestore, delivering
              personalized study plans with less than 100ms latency and
              supporting 500+ active users.
            </li>
            <li>
              Built a responsive frontend with Next.js, Tailwind CSS, and Redux
              using reusable components and custom hooks, increasing
              accessibility scores by 30% and improving UX across devices.
            </li>
            <li>
              Implemented CI/CD with GitHub Actions and Vercel for secure,
              automated testing and zero-downtime deploys, cutting release time
              by 70%; integrated analytics and WCAG-compliant design to raise
              engagement by 20% and lower bounce rate.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>
            Frontend Developer, CASE Co-op at Syracuse University – Syracuse,
            New York{" "}
          </strong>
          <strong>October 2022 - July 2023</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Redesigned the legacy patient portal for Associated
              Gastroenterologists using Figma and WordPress, collaborating with
              clinical teams to prioritize content and boost patient adoption by
              30%.
            </li>
            <li>
              Built responsive interfaces with HTML, CSS, JavaScript,
              integrating Elementor and WPForms to streamline workflows and
              enhance usability across devices; incorporated feedback from
              patients and staff to iteratively improve UI/UX and performance.
            </li>
            <li>
              Optimized page load speed, embedded Google Analytics, and enforced
              SEO with structured metadata and alt tags; ensured HIPAA-compliant
              handling of sensitive data, increasing appointment bookings by
              20%.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>
            Software Engineer, McDonald (via Anicca Data Science Solutions) –
            Bangalore, India{" "}
          </strong>
          <strong>March 2022 - July 2022 </strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Rebuilt the Restaurant File Maintenance (RFM) portal using
              Angular, enhancing analysis of customer and crew data and enabling
              data-driven strategic decisions through actionable insights.
            </li>
            <li>
              Engineered seamless frontend–backend integration to ensure
              efficient data flow and performance; refined UI based on user
              feedback, improving usability and empowering management with key
              insights.
            </li>
            <li>
              Achieved 100% user input validation and reduced frontend bugs by
              implementing robust form handling and automated tests with Jest
              and Selenium: improved page load time by 30% with optimized
              rendering and API handling.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>Software Engineer, Pelatro – Bangalore, India </strong>
          <strong>August 2021 - March 2022</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Developed Java and Spring Boot tools to automate backend testing
              workflows for telecom CRM systems, reducing post-release bugs by
              95% and ensuring robust deployments for tier-1 telecom operators.
            </li>
            <li>
              Optimized mViva data pipelines and subscriber data models to
              improve offer targeting and retrieval efficiency by 20% across
              large-scale telecom campaigns, while contributing to
              Hibernate–Spring Boot integration for backend consistency.
            </li>
            <li>
              Built and secured RESTful APIs integrating third-party telecom
              services provisioning, usage tracking, and billing while ensuring
              100% test coverage (JUnit, Mockito), conducting Git Flow-based
              code reviews, and enabling timely delivery in Agile sprints.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>Frontend Web Developer, Felicity – Jaipur, India </strong>
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
          <strong>
            Software Engineer Intern, Transil.Inc – Hubballi, India{" "}
          </strong>
          <strong>April 2020 - March 2021</strong>
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
          <strong>
            CodeSentinel AI: AI-Powered Secure Code Analysis & Cybersecurity
            Learning Module
          </strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Designing a modular React frontend with a Node.js and Supabase
              backend for real-time detection of OWASP Top 10 vulnerabilities.
            </li>
            <li>
              Integrating OpenAI and custom ML models to identify contextual
              threats, suggest secure code fixes, and power real-time scoring
              dashboards with less than 200ms latency.
            </li>
            <li>
              Developing AI-led CTF walkthroughs and tool demos (Burp Suite,
              Nmap, Wireshark); planning Dockerized microservices AWS deployment
              with CI/CD via GitHub Actions, targeting 80% test coverage and 1K+
              beta users.
            </li>
          </ul>
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
            <strong>Languages & Frameworks :</strong> Python, Java, C++, C#,
            JavaScript, TypeScript, PowerShell, Node.js, Express, Flask, .NET
            (basic), Spring Boot, Hibernate, Gradle
          </li>
          <li>
            <strong>CS Fundamentals :</strong> Data Structures, Algorithms, OOP
          </li>
          <li>
            <strong>Web & Tools: </strong> HTML5, CSS3, AJAX, JSON, Bootstrap,
            Tailwind, React, Angular, Next.js, Swift, WebSocket, REST APIs,
            Firebase
          </li>
          <li>
            <strong>DevOps & Cloud :</strong> AWS (EC2, S3, RDS, Lambda, IAM),
            Firebase, Docker, Kubernetes, Jenkins, GitHub Actions, Git, GitHub,
            GitLab
          </li>
          <li>
            <strong>Databases & Others :</strong> MySQL, SQL Server, JDBC,
            MongoDB, NoSQL, VS Code, IntelliJ, Eclipse, Postman, SOAP UI,
            Lighthouse, JIRA, Confluence, Agile, Waterfall
          </li>
          <li>
            <strong>Operating Systems :</strong>
            Windows, macOS, Linux
          </li>
          <li>
            <strong>Methodologies :</strong> Agile/Scrum, Waterfall
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

  const summary = () => {
    return (
      <div className="professional-experience">
        <div>
          <h2>SUMMARY</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <div className="professional-experience-item">
          Full-stack Software Engineer with 3.5+ years of experience delivering
          secure, scalable web apps and automating cloud infrastructure for
          brands like Microsoft and McDonald’s. Skilled in React, Node.js,
          Spring Boot, Firebase, CI/CD, and AI integration across enterprise and
          SaaS platforms. Delivered 70% faster releases, 95% bug reduction, and
          30% UX improvements in production environments.
        </div>
      </div>
    );
  };

  return (
    <div className="output resume">
      {getHeader()}
      {summary()}
      {getProfessionalExperience()}
      {getEducation()}
      {getSkills()}
      {getCertifications()}
      {getProjects()}
    </div>
  );
};

export default Resume;
