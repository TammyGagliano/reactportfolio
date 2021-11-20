import "./style.css";
import { Col, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skillscontainer">
        <Row>
          <Col sm>
            <strong>Languages:</strong>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>Node.js</li>
            <li>JavaScript</li>
          </Col>

          <Col sm>
            <strong>Libraries:</strong>
            <li>Bootstrap</li>
            <li>Express.js</li>
            <li>Material-ui</li>
            <li>React.js</li>
          </Col>
          <Col sm>
            <strong>Tools:</strong>
            <li>Eslint</li>
            <li>Webpack</li>
            <li>Chrome Dev</li>
            <li>Git & Github</li>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Skills;
