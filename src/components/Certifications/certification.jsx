import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import { Card, Divider, Icon, Image } from 'semantic-ui-react';
import Data from './data';
import hacker from '../../images/hacker.png';
const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
        <div className="line"></div>
        <div className="project-wrapper">
          <Title title="Certifications" />
          <Row>
            {Data.map((project) => {
              const { title, info, repo, img } = project;

              return (
                <Col lg={3} sm={12} className="d-flex justify-content-center mt-3">
                  <Card className="certificaiton-card">
                    <Image src={img} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{title}</Card.Header>
                      <Card.Meta>
                        <span className="date">{info}</span>
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                      <a href={repo} target="_blank">
                        View
                      </a>
                    </Card.Content>
                  </Card>
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
