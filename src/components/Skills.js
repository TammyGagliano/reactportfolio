import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

const Skills = () => {
  return (
    <div className="Portfolio">
      <h2>Programming Languages &amp; Tools</h2>
      <ul>
        <li>HTML5
        </li>
        <li>
          <i class="fab fa-css3-alt"></i>
        </li>
        <li>
          <i class="fab fa-js-square"></i>
        </li>
        <li>
          <i class="fab fa-wordpress"></i>
        </li>
        <li>
        <FontAwesomeIcon icon={["fab", "github"]} />
        </li>
        <li>
          <i class="fab fa-adobe"></i>
        </li>
        <li>
          <i class="fab fa-bootstrap"></i>
        </li>
        <li>
          <i class="fab fa-react"></i>
        </li>
        <li>
          <i class="fab fa-node-js"></i>
        </li>
      </ul>
    </div>
  );
};

export default Skills;