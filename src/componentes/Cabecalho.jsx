import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <StyledMenu>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/Rock">Rock</NavLink>
      <NavLink to="/Gospel">Gospel</NavLink>
    </StyledMenu>
  );
}

export default Menu;
