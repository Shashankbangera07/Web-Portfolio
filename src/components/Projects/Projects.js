import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Spotify Recommender System"
              description=" Spotify's recommender system is a sophisticated technology that uses data and algorithms to provide personalized music recommendations to its users. The primary goal of this system is to suggest songs, artists, albums, and playlists that align with the user's musical preferences and listening habits. This enhances the user experience by helping them discover new music that they might enjoy"
              ghLink="https://github.com/Shashankbangera07/Spotify-recommender-system"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Text Summarizer"
              description=" A text summarizer is a program or tool that automatically generates a concise and coherent summary of a given text or document."
              ghLink="https://github.com/Shashankbangera07/Text-Summarizer-Project"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cell Segmentation Using Yolo v8"
              description="Cell segmentation is a crucial task in biomedical image analysis, where the goal is to identify and isolate individual cells from microscopy images. Accurate cell segmentation is essential for various biological and medical applications, including cell counting, tracking, and studying cell behaviors."
              ghLink=""
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chicken Disease Classification"
              description="Chicken Disease Classification is a specific application of machine learning and computer vision techniques aimed at automatically identifying and categorizing different diseases that affect chickens or other poultry species. The goal of this project is to develop a system that can analyze images or data related to chickens' health and accurately classify the presence of specific diseases or health conditions.

              "
              ghLink="https://github.com/Shashankbangera07/Chicken-Disease-Classification--Project-final"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Big Mart Prediction And Deployment

              "
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/shashankb07/Big-Mart-Prediction-And-Deployment"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Olympic Analysis
              
              "
              description=" Olympic analysis project involves the exploration, visualization, and interpretation of data related to the Olympic Games. The goal of such a project is to gain insights into the historical performance and trends of participating countries and athletes, as well as to identify patterns and interesting statistics related to the Olympic events."
              ghLink="https://github.com/shashankb07/Olympic-Analysis"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/shashankb07/Face-Mask-Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            /> */}
          {/* </Col> */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
