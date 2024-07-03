import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.div`
  padding: 12px 48px;

  .logo__wrapper img {
    max-width: 64px;
    height: auto;
  }

  li {
    list-style-type: none;
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation className="row middle-xs g-48">
      <div className="logo__wrapper">
        <img src="/pxlogo.png" alt="The People Experience Hub" />
      </div>
      <nav>
        <ul className="row g-16">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;
