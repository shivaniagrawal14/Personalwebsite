import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I am a Analyst, with previous experience as an IT Business Data Analyst, and have a passion for managing the data and a relentless drive for continuous improvement in all of my endeavors.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'A curious professional soaking up as much knowledge and practice as I can in an attempt to perfect my craft. I have experience using Python, R, Excel, Tableau, SAS, Javascript, SQL, PowerPoint, ETL and I have just started diving into  deep knowledge of Regresssion Analysis and Visualizations.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'In addition to being Analyst, I have broad interests including science education, management and product management, project management, agile methodology, and writing for both scientific and general audiences.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href="https://drive.google.com/drive/folders/1xvrIqK948RyPwuETH1ReyI5sn6YcOh13?usp=sharing"
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
