import { Link } from "react-router-dom";
import { StyledButton } from "./styles/Button.styled";
import { StyledHeader, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
          <h1>PERN Stack</h1>
          <Nav>
            <ul>
              <li><StyledButton><Link to="/">Read Posts</Link></StyledButton></li>
              <li><StyledButton><Link to={`/post`}>Create Post</Link></StyledButton></li>
            </ul>
          </Nav>
    </StyledHeader> 
  );
};

export default Header;
