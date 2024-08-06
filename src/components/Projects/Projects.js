import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import DevSphere from "../../Assets/Projects/DevSphere.png";
import BookStore from "../../Assets/Projects/blog.png";
  
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevSphere}
              isBlog={false}
              title="DevSphere"
              description="Created a social media platform for developers to connect, share, and engage with each other’s. Integrated user
profiles, follow/unfollow functionality, and real-time post feeds using React and Django. Utilized React hooks
and context for dynamic content updates and user experience improvements"
              ghLink="https://github.com/Bharatk003/Social-Nework-for-Coders.git"
              demoLink="https://devsphere-coders.netlify.app/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookStore}
              isBlog={false}
              title="BookStore"
              description="Project involves social interaction. It implies a platform where users can not only consume news but also engage with it socially, such as
by commenting, sharing, or discussing articles with other users. It conveys the idea of a community-driven news platform, which could
be appealing to both readers and contributors. This project was developed as part of my learning Django Framework, and it showcases my skills in web development using Django
framework. I believe it has the potential to contribute positively to our department's initiatives and objectives.
"
              ghLink="https://github.com/Bharatk003/BookStore_Project.git"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blog-API"
              description="DjangoBlogAPI is a comprehensive RESTful API built using Django and Django REST Framework (DRF) for managing blog posts, user
authentication, and permissions. The project aims to provide developers with a robust and scalable solution for creating and managing
blog content through a RESTful interface.
"
              ghLink="https://github.com/Bharatk003/Blogapi.git"
              demoLink=" "              
            />
          </Col>
 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
