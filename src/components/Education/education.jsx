import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import { Card, Divider, Icon, Image, Header, Grid } from 'semantic-ui-react';
import Data from './data';
import hacker from '../../images/hacker.png';
const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [size, setSize] = useState(2);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Education" />
          <Row>
            {Data.map((project) => {
              const { title, info, repo, img } = project;
              return (
                <Col lg={6} sm={12} className="mt-5">
                  <div className="education-card">
                    <Image src={img} size="medium" circular className="education-img" />
                    <Header as="h2" className="header title">
                      {title}
                    </Header>
                    <Header as="h3" className="header">
                      {info}
                    </Header>
                    <Header as="h3" className="header">
                      {repo}
                    </Header>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
